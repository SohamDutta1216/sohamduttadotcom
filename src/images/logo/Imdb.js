import React from 'react';

const Imdb = () => {
    return (
        <div className='logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="9.446 8.068 281.185 135.084"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-922.194" y1="1292.729" x2="-869.586" y2="1096.397" gradientTransform="matrix(1 0 0 -1 1045.93 1270.176)"><stop offset="0" stop-color="#f8e643" /><stop offset="1" stop-color="#bfa233" /></linearGradient><path d="M28.418 8.068C25.597 22.923 21.08 24.859 9.446 27.035v97.141c11.638 1.525 18.743 7.344 18.978 18.977h243.229c.879-10.987 8.636-17.45 18.979-18.977V27.035c-11.628-.885-18.088-6.693-18.979-18.967H28.418z" /><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-919.089" y1="1108" x2="-872.694" y2="1281.147" gradientTransform="matrix(1 0 0 -1 1045.93 1270.176)"><stop offset="0" stop-color="#f8e643" /><stop offset="1" stop-color="#bfa233" /></linearGradient><path d="M39.781 16.963c-2.55 12.908-6.652 14.589-17.202 16.468v84.33c10.55 1.322 16.994 6.377 17.202 16.476h220.514c.803-9.551 7.828-15.152 17.208-16.476v-84.33c-10.556-.755-16.405-5.804-17.208-16.468H39.781z" fill="url(#b)" /><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="-917.98" y1="1277.003" x2="-873.806" y2="1112.141" gradientTransform="matrix(1 0 0 -1 1045.93 1270.176)"><stop offset="0" stop-color="#f8e643" /><stop offset="1" stop-color="#bfa233" /></linearGradient><path d="M42.545 20.549c-2.488 12.117-6.491 13.694-16.766 15.469v79.167c10.275 1.239 16.563 5.979 16.766 15.471h214.991c.774-8.963 7.62-14.23 16.76-15.471V36.019c-10.274-.713-15.983-5.465-16.76-15.469l-214.991-.001z" fill="url(#c)" /><path d="M235.598 115.99c-2.463 0-4.795-.549-6.933-1.628-1.522-.771-2.952-1.815-4.274-3.119l-.701 2.72-.23.899h-20.229V34.731H225.018v16.803a16.07 16.07 0 0 1 3.653-2.382c2.147-.991 4.481-1.493 6.947-1.493 2.803 0 5.29.45 7.396 1.338 2.17.927 3.85 2.249 5 3.929 1.125 1.655 1.815 3.308 2.053 4.917.218 1.537.326 4.688.326 9.377v28.675c0 4.836-.322 8.353-.992 10.752-.682 2.535-2.318 4.759-4.856 6.601-2.52 1.822-5.527 2.742-8.947 2.742zm-8.907-54.621c-.996 0-1.149.383-1.226.566-.136.329-.448 1.589-.448 6.177v27.377c0 4.239.321 5.632.516 6.086.152.366.412.698 1.3.698.938 0 1.153-.363 1.282-.702.181-.479.484-1.988.484-6.712V68.112c0-4.068-.34-5.486-.543-5.969-.193-.464-.501-.774-1.365-.774zm-50.494 53.493h-26.63V34.731h16.282c9.938 0 16.5.452 20.062 1.38 3.658.959 6.494 2.569 8.436 4.784 1.928 2.226 3.146 4.724 3.631 7.43.465 2.604.692 7.516.692 15.013v27.227c0 7.134-.336 11.815-1.028 14.313-.721 2.588-2.008 4.653-3.824 6.136-1.771 1.438-3.967 2.459-6.531 3.033-2.508.549-6.135.815-11.09.815zm-4.036-64.454v48.76c1.642-.125 2.735-.512 3.071-1.107.25-.448.838-2.229.838-8.951V58.848c0-4.255-.168-5.89-.311-6.51-.15-.681-.453-1.132-.951-1.424-.279-.167-.966-.423-2.647-.506zm-28.247 64.454H123.896v-1.197l-.05-34.688-4.667 34.848-.14 1.039h-14.695l-.148-1.029-4.988-34.855-.056 34.688-.002 1.197H79.139V34.731h28.37l.15 1.026.82 5.615a6429.12 6429.12 0 0 0 1.599 10.945l1.609 11.061 3.535-27.6.135-1.047h28.555v80.131h.002zm-70.486 0H50.829V34.731H73.428v80.131z" fill="#fff" /><path d="M52.028 35.93h20.2v77.732h-20.2zM142.714 35.93v77.732h-17.619l-.078-52.483-7.027 52.483h-12.605l-7.349-51.353-.083 51.353H80.338V35.93h26.134c.692 4.721 1.489 10.243 2.42 16.562l2.873 19.737 4.648-36.299h26.301zM170.962 49.182v51.228c2.878 0 4.653-.584 5.313-1.76.656-1.172.994-4.353.994-9.541V58.848c0-3.529-.113-5.788-.338-6.777-.225-1-.725-1.729-1.516-2.191-.783-.469-2.267-.698-4.453-.698M150.768 35.93h15.084c9.737 0 16.328.448 19.758 1.343 3.436.9 6.049 2.374 7.834 4.414 1.785 2.056 2.904 4.33 3.352 6.85.453 2.514.678 7.443.678 14.803v27.227c0 6.98-.334 11.64-.984 13.992-.655 2.353-1.795 4.193-3.43 5.527-1.629 1.326-3.639 2.254-6.033 2.789-2.395.525-6 .787-10.826.787h-25.432V35.93h-.001zM229.799 68.112c0-3.284-.213-5.423-.635-6.434-.422-1.005-1.238-1.51-2.473-1.51-1.203 0-1.983.443-2.338 1.312-.358.879-.535 3.092-.535 6.631V95.49c0 3.414.203 5.596.609 6.553.399.963 1.207 1.432 2.403 1.432 1.229 0 2.03-.487 2.403-1.479.375-.994.563-3.367.563-7.135l.003-26.749zm-5.981-32.182v18.503c1.607-1.874 3.394-3.274 5.361-4.195 1.981-.917 4.127-1.379 6.438-1.379 2.658 0 4.966.417 6.928 1.244 1.957.838 3.451 2.004 4.477 3.503 1.025 1.504 1.646 2.978 1.857 4.414.203 1.437.312 4.502.312 9.202v28.674c0 4.67-.312 8.146-.946 10.432-.619 2.289-2.099 4.273-4.408 5.949-2.315 1.676-5.06 2.514-8.239 2.514-2.285 0-4.414-.5-6.393-1.5-1.982-1.004-3.794-2.504-5.424-4.496l-1.254 4.867H204.43V35.93h19.388zM256.65 44.831h.761c.868 0 1.604-.313 1.604-1.119 0-.583-.422-1.161-1.604-1.161-.345 0-.572.026-.761.057v2.223zm0 3.648h-1.045V41.9c.551-.083 1.072-.162 1.863-.162.993 0 1.648.208 2.039.5.396.287.604.734.604 1.364 0 .87-.571 1.39-1.279 1.598v.052c.572.109.969.629 1.1 1.603.155 1.02.312 1.416.422 1.624h-1.1c-.167-.208-.316-.812-.453-1.676-.156-.843-.572-1.155-1.416-1.155h-.732v2.831h-.003zm1.1-8.416c-2.594 0-4.717 2.228-4.717 4.981 0 2.811 2.123 5.012 4.748 5.012 2.623.026 4.721-2.202 4.721-4.986 0-2.779-2.098-5.007-4.721-5.007h-.031zm.031-.921c3.227 0 5.798 2.623 5.798 5.902 0 3.331-2.571 5.929-5.829 5.929-3.223 0-5.846-2.598-5.846-5.929 0-3.279 2.623-5.902 5.846-5.902h.031z" /></svg>
        </div>
    );
};

export default Imdb;