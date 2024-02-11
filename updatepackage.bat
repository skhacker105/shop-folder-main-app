@echo off
IF "%2"=="" cls
:: locations of all application
set baseLocation=D:\ShopFolderContainer\
set sharedLib=%baseLocation%SharedLibrary\
set sfContact=%baseLocation%shop-folder-contact\

:: other variables
set selectedLibrary=_

IF NOT "%1"=="" (set selectedLibrary=%1)
IF /i %selectedLibrary%==_ goto finalExit
CALL COLOR A
echo:
echo ------------------------------------------------------------------------------
echo Updating %selectedLibrary% in Shop Folder
echo ------------------------------------------------------------------------------
CALL COLOR F

cd %sfContact%
CALL npm i %selectedLibrary%@latest

if NOT "%2"=="" cd %sharedLib%
if "%2"=="" cd %sfContact%