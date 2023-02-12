import React, { useEffect } from 'react'
import{ useState } from 'react';
import ReactQuill, {Quill}from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';
import { collection, doc, updateDoc, onSnapshot } from 'firebase/firestore'
import { database } from '../firebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike','link', 'image', 'video'],        // toggled buttons
    ['blockquote', 'code-block']
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];

function Editor() {
    const [editorData, setEditorData] = useState("");
    const [title, setTitle] = useState('')
    let databaseCollection = collection(database, 'docs-data');
    let navigate = useNavigate();
    let params = useParams();

    const getEditorData = (value) => {
        setEditorData(value);
    };

    
    useEffect(() => {
        const updateDocument = setTimeout(() => {
            let docToUpdate = doc(databaseCollection, params.id);

            updateDoc(docToUpdate, {
                body: editorData
            })
            .then(() => {
                toast.success('Data Updated', {
                    autoClose: 1000
                });  
            })
            .catch(() => {
                toast.error('Cannot Update data', {
                    autoClose: 1000
                });
            }) 

        }, 2000);

        return () => clearTimeout(updateDocument);
    }, [editorData]);

    useEffect(() => {
        const document = doc(databaseCollection, params.id);
        onSnapshot(document, (docs) => {
            setTitle(docs.data().title);
            setEditorData(docs.data().body);
        });
    }, []);

  return (
    <div>
        <div>
            <button className='goback-btn' onClick={() => navigate('/home')}>Go Back</button>
        </div>
         <ToastContainer />
         <h3>{title}</h3>
       {/* <ReactQuill value={editorData} onChange={getEditorData} theme='snow' modules={toolbar=`toolbarOptions`}/> */}
       <ReactQuill
      theme="snow"
      placeholder="Start writing..."
      modules={{
        toolbar: {
          container: toolbarOptions
        },
      }}
      value={editorData}
      onChange={getEditorData}
    />
       
    </div>
  )
}

export default Editor