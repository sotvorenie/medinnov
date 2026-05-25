function ImgUpload() {
    let imgWrap = "";
    let imgArray = [];

    const uploadFiles = document.querySelectorAll('.upload-btn__inputfile');
    _.each(uploadFiles, (item) => {
        item.addEventListener('change', function(e) {
            imgWrap = item.parentElement.parentElement.querySelector('.upload-btn__img-wrap');
            imgWrap.innerHTML = "";

            const maxLength = item.dataset.max_length;

            let files = e.target.files;
            let filesArr = Array.prototype.slice.call(files);
            // var iterator = 0;

            _.each(filesArr, (f, index) => {
                if (!f.type.match('image.*')) {
                    return;
                }

                if (imgArray.length > maxLength) {
                    return false
                } else {
                    let len = 0;
                    for (let i = 0; i < imgArray.length; i++) {
                        if (imgArray[i] !== undefined) {
                            len++;
                        }
                    }
                    if (len > maxLength) {
                        return false;
                    } else {
                        imgArray.push(f);

                        let reader = new FileReader();
                        reader.onload = function (e) {
                            let html = "<div class='upload-btn__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + index + "' data-file='" + f.name + "' class='img-bg'><div class='upload-btn__img-close'></div></div></div>";
                            imgWrap.insertAdjacentHTML("beforeend", html);

                            if (imgArray.length == index + 1) {
                                const closeBtns = imgWrap.querySelectorAll('.upload-btn__img-close')
                                
                                _.each(closeBtns, (deleteBtn) => {
                                    
                                    if (!deleteBtn.classList.contains('_init')) {
                                        const file = deleteBtn.parentElement.dataset.file;
                                        deleteBtn.addEventListener('click', () => {
                                            
                                            for (var i = 0; i < imgArray.length; i++) {
                                                if (_.isEqual(imgArray[i].name, file)) {
                                                    imgArray.splice(i, 1);
                                                    break;
                                                }
                                            }
                                            deleteBtn.parentElement.parentElement.remove();
                                        })
                                        deleteBtn.classList.add('_init');
                                    }
                                });
                            }

                            // iterator++;
                        }
                        reader.readAsDataURL(f);
                    }
                }
            });

        })
    });
}

document.addEventListener("DOMContentLoaded", () => {
    ImgUpload();
});