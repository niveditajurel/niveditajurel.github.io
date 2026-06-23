from __future__ import annotations

import math
from dataclasses import dataclass
from pathlib import Path

import imageio.v2 as imageio
import numpy as np
from PIL import Image, ImageEnhance


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "client" / "public"
OUTPUT_DIR = PUBLIC / "thumbnail-previews"


@dataclass(frozen=True)
class PreviewSpec:
    source: str
    output: str
    max_width: int = 960
    zoom: float = 0.045
    shift_x: int = 20
    shift_y: int = 12


SPECS: tuple[PreviewSpec, ...] = (
    PreviewSpec(
        source="anand-workflow-system-map.png",
        output="anand-workflow-system-map-preview.mp4",
        max_width=960,
        zoom=0.035,
        shift_x=18,
        shift_y=10,
    ),
    PreviewSpec(
        source="nomad-ai-dashboard.png",
        output="nomad-ai-dashboard-preview.mp4",
        max_width=960,
        zoom=0.04,
        shift_x=18,
        shift_y=12,
    ),
    PreviewSpec(
        source="teasers/skingenius1.jpg",
        output="skingenius-preview.mp4",
        max_width=960,
        zoom=0.042,
        shift_x=16,
        shift_y=10,
    ),
    PreviewSpec(
        source="case-study-thumbnails/uber-dispatch-hero.png",
        output="uber-dispatch-preview.mp4",
        max_width=960,
        zoom=0.04,
        shift_x=18,
        shift_y=8,
    ),
    PreviewSpec(
        source="case-study-thumbnails/learning-council-panel.png",
        output="learning-council-preview.mp4",
        max_width=720,
        zoom=0.05,
        shift_x=16,
        shift_y=10,
    ),
    PreviewSpec(
        source="case-study-thumbnails/finwise-panel.png",
        output="finwise-preview.mp4",
        max_width=720,
        zoom=0.05,
        shift_x=16,
        shift_y=10,
    ),
    PreviewSpec(
        source="case-study-thumbnails/portfolio-home-hero.png",
        output="portfolio-home-preview.mp4",
        max_width=960,
        zoom=0.03,
        shift_x=10,
        shift_y=12,
    ),
)


def clamp_even(value: int) -> int:
    return value if value % 2 == 0 else value - 1


def clamp_block(value: int, block: int = 16) -> int:
    return value if value % block == 0 else value + (block - (value % block))


def fit_image(image: Image.Image, max_width: int) -> Image.Image:
    if image.width > max_width:
        ratio = max_width / image.width
        width = clamp_block(clamp_even(int(image.width * ratio)))
        height = clamp_block(clamp_even(int(image.height * ratio)))
        return image.resize((width, height), Image.Resampling.LANCZOS)

    width = clamp_block(clamp_even(image.width))
    height = clamp_block(clamp_even(image.height))
    if (width, height) == image.size:
        return image

    return image.resize((width, height), Image.Resampling.LANCZOS)


def build_frames(image: Image.Image, spec: PreviewSpec) -> list[np.ndarray]:
    base = fit_image(image.convert("RGB"), spec.max_width)
    base_w, base_h = base.size
    frames: list[np.ndarray] = []

    for index in range(40):
        t = index / 39
        eased = 0.5 - 0.5 * math.cos(t * math.pi)
        scale = 1.0 + spec.zoom * eased
        x_offset = int((0.5 - eased) * spec.shift_x)
        y_offset = int((eased - 0.5) * spec.shift_y)

        next_w = clamp_even(int(base_w * scale))
        next_h = clamp_even(int(base_h * scale))
        zoomed = base.resize((next_w, next_h), Image.Resampling.LANCZOS)

        left = max(0, min(next_w - base_w, (next_w - base_w) // 2 + x_offset))
        top = max(0, min(next_h - base_h, (next_h - base_h) // 2 + y_offset))
        frame = zoomed.crop((left, top, left + base_w, top + base_h))
        frame = ImageEnhance.Color(frame).enhance(1.02)
        frame = ImageEnhance.Contrast(frame).enhance(1.01)
        frames.append(np.array(frame))

    return frames + frames[::-1][1:-1]


def write_preview(spec: PreviewSpec) -> None:
    source_path = PUBLIC / spec.source
    output_path = OUTPUT_DIR / spec.output
    output_path.parent.mkdir(parents=True, exist_ok=True)

    image = Image.open(source_path)
    frames = build_frames(image, spec)

    with imageio.get_writer(
        output_path,
        fps=16,
        codec="libx264",
        quality=6,
        pixelformat="yuv420p",
        macro_block_size=16,
    ) as writer:
        for frame in frames:
            writer.append_data(frame)

    size_kb = output_path.stat().st_size / 1024
    print(f"{spec.output}: {size_kb:.1f} KB")


def main() -> None:
    for spec in SPECS:
        write_preview(spec)


if __name__ == "__main__":
    main()
