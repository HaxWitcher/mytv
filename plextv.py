# plextv.py

from stremio_addon import StremioAddon

addon = StremioAddon()

# Replace the dummy data below with your actual m3u links
tv_lists = [
    {"name": "TV lista 1", "url": "stvaran link za m3u"},
    {"name": "TV lista 2", "url": "stvaran link za m3u"},
    {"name": "TV lista 3", "url": "stvaran link za m3u"}
]

@addon.on('catalog')
def get_catalog(args):
    # Return the TV lists
    return tv_lists

if __name__ == '__main__':
    addon.run()
