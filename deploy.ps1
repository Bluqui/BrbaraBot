Write-Host "Adicionando './main'" -ForegroundColor Cyan
git add ./main/
Write-Host "`nFazendo Commit" -ForegroundColor Blue
git commit -m "0.1.0"
Write-Host "`nDado o Push" -ForegroundColor DarkBlue
git push
