import "./App.css";
import Modal from "./components/UI/Modal/Modal.tsx";
import {useState} from "react";


function App() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const cancel = () => setShowModal(false);

  const arrayConfigButtons = [
    {
      type: "primary",
      label: "Continue",
      onClick: () => console.log("clicked continue"),
    },
    {
      type: "danger",
      label: "Close",
        onClick: cancel,
    },
  ];

  return (
      <>
          <div className='text-center mt-5'>
              <button onClick={() => setShowModal(true)}>Open modal-window</button>
          </div>

          <Modal
              show={showModal}
              closeModal={cancel}
              title="Some kinda modal title"
              arrayConfigButtons={arrayConfigButtons}
          >
              <p>This is modal content</p>
          </Modal>

      </>
  );
}

export default App;
