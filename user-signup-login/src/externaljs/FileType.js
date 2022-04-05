import React from 'react'

export function FileType(ext) {
    switch(ext){
        case 'pdf':
            return 'filetype-pdf';
        case 'docx':
            return 'filetype-pdf';
        case 'xls':
            return 'filetype-excel';
        case 'xlsx':
            return 'filetype-excel';
        case 'ppt':
            return 'filetype-powerpoint';
        case 'zip':
            return 'filetype-zip';
        case 'mp3':
            return 'filetype-audio';
        case 'mp4':
            return 'filetype-video';
        case 'jpg':
            return 'filetype-image';
        default:
            return 'filetype-image';
    }
}

export function FileSvg(ext,path) {
    switch(ext){
        case 'pdf':
            return <div className="file-icon"><img src="/assets/images/icons/pdf.svg" alt="PDF"/></div>;
        case 'docx':
            return <div className="file-icon"><img src="/assets/images/icons/pdf.svg" alt="PDF"/></div>;
        case 'xls':
            return <div className="file-icon"><img src="assets/images/icons/excel.svg" alt="Excel File"/></div>;
        case 'xlsx':
            return <div className="file-icon"><img src="assets/images/icons/excel.svg" alt="Excel File"/></div>;
        case 'ppt':
            return <div className="file-icon"><img src="assets/images/icons/ppt.svg" alt="Powerpoint"/></div>;
        case 'zip':
            return <div className="file-icon"><img src="assets/images/icons/zip.svg" alt="Archive"/></div>;
        case 'mp3':
            return <div className="file-icon"><img src="assets/images/icons/headphones.svg" alt="Audio"/></div>;
        case 'mp4':
            return <div className="file-icon"><img src="assets/images/icons/video.svg" alt="Audio"/></div>;
        case 'jpg':
            return <div className="file-icon" style={{ backgroundImage: "url(" + path + ")" }}></div>;
        default:
            return <div className="file-icon" style={{ backgroundImage: "url(" + path + ")" }}></div>;
    }
}

export function FileIcon(ext) {
    switch(ext){
        case 'pdf':
            return 'icon-file-pdf';
        case 'docx':
            return 'icon-file-pdf';
        case 'xls':
            return 'icon-file-excel';
        case 'xlsx':
            return 'icon-file-excel';
        case 'ppt':
            return 'icon-image5';
        case 'zip':
            return 'icon-file-zip';
        case 'mp3':
            return 'icon-music';
        case 'mp4':
            return 'icon-video-camera';
        case 'jpg':
            return 'icon-image5';
        default:
            return 'icon-image5';
    }
}