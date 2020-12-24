import React from 'react';
import Modal from "react-modal";
import SearchBox from "./Searchbox";

export default function Modale({ name}) {
    return (
        <div>
            <Modal isOpen={modalIsOpen}
                    shouldCloseOnOverlayClick={false}
                    onRequestClose={() => setModalIsOpen(false)}
                    style={{
                        overlay: {
                            backgroundColor: 'transparent'
                        },
                        content: {
                            color: 'red'
                        }
                    }}
                    >
                    <div>
                        <button id="modalclosebutton" onClick={() => setModalIsOpen(false)}>Close</button>
                        
                    </div>
                    <div>
                    <SearchBox />
                    <h3>Modal Opened!</h3>
                    
                    <p>Hello</p>
                    <p>{name}</p>
                    </div>
                    
                </Modal>
              
        </div>
    )
}
