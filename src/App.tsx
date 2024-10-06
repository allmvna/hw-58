import "./App.css";
import Modal from "./components/UI/Modal/Modal.tsx";
import {useState} from "react";

function App() {
  const [showModal, setShowModal] = useState<boolean>(true);

  const cancel = () => setShowModal(!showModal);

  return (
      <>
        <Modal
            show={showModal}
            closeModal={cancel}
            title="Some kinda modal title"
        >
          <p>This is modal content</p>
        </Modal>
      </>
  )

}

export default App;
