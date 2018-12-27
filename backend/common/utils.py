import uuid
import os

IMG_DIR="../imgs/"

if not os.path.exists(IMG_DIR):
    os.makedirs(IMG_DIR)

# image is a flask file
def save_image(image):
    image_id = str(uuid.uuid4())
    image_ext=image.filename.split(".")[-1]
    image.save(IMG_DIR+image_id+'.'+image_ext)
    return image_id,image_ext

def get_image(image_id,image_ext):
    return IMG_DIR+image_id+'.'+image_ext