set PLATFORM=%1%
set ARCH=%2%
set APP_NAME="Nets-music"

electron-packager . "%APP_NAME%" --platform=%PLATFORM% --arch=%ARCH% --electronVersion=6.0.12 --app-version=0.1.0 --asar --overwrite --out=.\dist
