
:: locations of all application
set baseLocation=D:\ShopFolderContainer\
set sf=%baseLocation%shop-folder\
set sfContact=%baseLocation%shop-folder-contact\
set sfHome=%baseLocation%shop-folder-home\
set sfLogin=%baseLocation%shop-folder-login\

cd %sf%
start "" npm start
cd %sfContact%
start "" npm start
cd %sfHome%
start "" npm start
cd %sfLogin%
start "" npm start
