import React from 'react';

const videoUrls = [

    "https://www.youtube.com/embed/2sjdHGTCKpg?si=kdyqD2xU5XoLhA7J",
    "https://www.youtube.com/embed/K6wdW5P-jhU?si=fhkoBhw-crFnD2VE",
    "https://www.youtube.com/embed/Vf6mpOSFv_Q?si=DAoWfJ1B474XU9ay",
    "https://www.youtube.com/embed/FOU_1N1CRCc?si=QaLG4Iejpr-UgUye",
    "https://www.youtube.com/embed/_6XmSYN5BmU?si=qmPjiKei1vbjjbPW",
    "https://www.youtube.com/embed/XJ6iEnO0ZoE?si=CnQtbOS2uIakPu07",
    "https://www.youtube.com/embed/E3ztjG5tLm4?si=dmwovuysi0DxaeUI&amp;"


];

const Media = () => {
    return (
        <div className="container mx-auto p-4 px-[80px] mt-10 ">
            {/* Секция для двух последних больших видео */}
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 mb-8 justify-items-center ">
                {videoUrls.slice(0, 2).map((url, index) => (
                    <div key={index} className="w-[550px] h-[400px]">
                        <iframe
                            width="100%"
                            height="100%"
                            src={url}
                            title={`YouTube video ${index + 1}`}
                            controls='0'
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className='rounded-2xl'
                        ></iframe>
                    </div>
                ))}
            </div>

            {/* Секция для остальных видео меньшего размера */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-[50px] mt-[50px]  justify-self-center">
                {videoUrls.slice(2).map((url, index) => (
                    <div key={index + 2} className="w-[350px] h-[250px]">
                        <iframe
                            width="100%"
                            height="100%"
                            src={url}
                            title={`YouTube video ${index + 3}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className='rounded-2xl'
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Media;
