
:: locations of all application
set baseLocation=D:\ShopFolderContainer\
set sf=%baseLocation%shop-folder\
set sfContact=%baseLocation%shop-folder-contact\
set sfHome=%baseLocation%shop-folder-home\
set sfLogin=%baseLocation%shop-folder-login\

cd %sf%
start "" ng build --configuration=production
cd %sfContact%
start "" ng build --configuration=production
cd %sfHome%
start "" ng build --configuration=production
cd %sfLogin%
start "" ng build --configuration=production
