const itemsArr = [
    {
        id: 1,
        title: 'title',
        imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    },
    {
        id: 2,
        title: 'title',
        imgUrl: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    {
        id: 3,
        title: 'title',
        imgUrl: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
    }
]

const elements = document.querySelectorAll('.wrapped-item')

for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', (e)=>{
        let modalImage = document.querySelector('.modal-image')
        var modal = document.querySelector('.modal-box')
        modalImage.src = itemsArr[i].imgUrl
        modal.style.visibility = 'visible'
    })
}
