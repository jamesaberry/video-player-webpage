import sys, os, time, json

photoDir = os.path.dirname(sys.argv[0]) + '../src/assets/photos'
appConfigFileName = os.path.dirname(sys.argv[0]) + '../src/assets/appConfig.json'
appConfigFileReName = os.path.dirname(sys.argv[0]) + '../src/assets/appConfig_' + str(time.time()) + '.json'

# Load the existing config json
with open(appConfigFileName, 'r') as infile:
    appConfigJson = json.load(infile)

# Rename the existing config json
os.rename(appConfigFileName, appConfigFileReName)

# Gather List of current photos
photos = []
for photo in os.listdir(photoDir):
	photos.append(photo)

# Update json with list	
appConfigJson["imageNames"] = photos

# Save the new List
with open(appConfigFileName, 'w') as outfile:
    json.dump(appConfigJson, outfile)