Set-Location $PSScriptRoot

Write-Host ""
Write-Host "AD BEAUTY ARTIST V5" -ForegroundColor Cyan
Write-Host "Serveur local : http://localhost:8025/index.html" -ForegroundColor Green
Write-Host ""

python -m http.server 8025