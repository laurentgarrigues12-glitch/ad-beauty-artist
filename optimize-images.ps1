param(
    [string]$Source = ".\assets\originals",
    [string]$Destination = ".\assets\images"
)

$ErrorActionPreference = "Stop"

if (-not (Get-Command py -ErrorAction SilentlyContinue)) {
    Write-Host "Python est nécessaire." -ForegroundColor Red
    exit
}

py -c "import PIL" 2>$null

if ($LASTEXITCODE -ne 0) {
    Write-Host "Installation de Pillow..." -ForegroundColor Yellow
    py -m pip install pillow
}

$python = @"
from pathlib import Path
from PIL import Image, ImageOps

source = Path(r'$Source')
destination = Path(r'$Destination')

destination.mkdir(parents=True, exist_ok=True)

extensions = {'.jpg', '.jpeg', '.png', '.webp'}

for file in source.iterdir():

    if file.suffix.lower() not in extensions:
        continue

    img = Image.open(file)
    img = ImageOps.exif_transpose(img)

    if img.mode not in ('RGB', 'RGBA'):
        img = img.convert('RGB')

    max_width = 1920

    if img.width > max_width:
        ratio = max_width / img.width
        img = img.resize(
            (max_width, round(img.height * ratio)),
            Image.Resampling.LANCZOS
        )

    output = destination / (file.stem + '.webp')

    img.save(
        output,
        'WEBP',
        quality=84,
        method=6
    )

    print(f'{file.name} -> {output.name}')
"@

$python | py -

Write-Host ""
Write-Host "Optimisation terminée." -ForegroundColor Green