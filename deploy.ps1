Write-Host "Adicionando './'" -ForegroundColor Cyan
git add ./
Write-Host "`nFazendo Commit" -ForegroundColor Blue
git commit -m "0.1.0"
Write-Host "`nDando o Push" -ForegroundColor DarkBlue
git push
Write-Host "`n"
