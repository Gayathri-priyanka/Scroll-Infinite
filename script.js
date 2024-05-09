const imageContainer=document.getElementById("image-container");
const loader=document.getElementById('loader');

let photosArray=[];

//Unsplash api
const count=10;
const apiKey='yhWp30GFlUI4xcG5crDd2wZKKKgbXEH9lSILE4dd050';
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
//Helper function to set attributes on DOM
function setAttributes(element,attributes){
    for (const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

// Create elements for links & photos, add to DOM
function displayPhotos(){
    photosArray.forEach((photo) => {
        // Creatre <a> tag to link to unsplash
        const item=document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        //Create image tag for phopto
        const img=document.createElement('img');
        // img.setAttribute('src',photo.urls.regular);
        // img.setAttribute('alt',photo.alt_description);
        // img.setAttribute('title',photo.alt_description);
        setAttributes(img,{
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // put <img> inside <a> , put both in image containmer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from unspalsh
async function getPhotos(){
    try{
        const response= await fetch(apiUrl);
        photosArray=await response.json();
        displayPhotos();
    }
    catch (error) {
        //catch error
    }
}

// On load
getPhotos();