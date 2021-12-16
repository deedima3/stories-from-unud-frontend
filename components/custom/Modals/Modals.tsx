import { Divider } from '@chakra-ui/layout';
import React, { ReactChild, ReactChildren, useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import ModalOverlay from './ModalOverlay'

export interface ModalProps{
    show : boolean;
    onClose : () => void;
    children : JSX.Element;
    title? : string | null;
    isLoading? : boolean;
}

const Modals = ({show, onClose, children, title = null, isLoading = false} : ModalProps) => {
    
    const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);

    //Inferring any type notes for myself look for this again in future
    const handleCloseClick = (e : any) => {
        e.preventDefault();
        onClose();
    }
    
    const modalContent = show ? (
        <ModalOverlay darkAmount={500}>
            <div className="bg-white p-4 shadow-md rounded-md w-96 flex flex-col justify-center items-center z-50">
                {!isLoading ?
                    <div className="flex justify-end font-bold text-gray-400 font-Inter">
                        <a href="#" onClick={handleCloseClick}>
                            X
                        </a>
                    </div>
                    : null
                }
                {title && <div className="font-Inter text-blue-500 text-center font-bold text-lg">
                    {title}
                </div>}
                <div className="p-10">
                    {children}
                </div>
            </div>
        </ModalOverlay>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent, 
            document.getElementById("modal-root")!
        );
      } else {
        return null;
      }
}

export default Modals
