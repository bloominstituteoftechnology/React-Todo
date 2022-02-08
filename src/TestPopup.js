import React,{useState} from 'react';
import "./styles/TestPopup.css"
import {storyManagerImg} from "./AdminHome";
import axios from 'axios';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload, message, Form, Input, Buttony  } from 'antd';
import UploadEpisode from './UploadEpisode';

function TestPopup(props) {
    const [state, setState] = useState({ loading: false, dataUrl: '' });

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      };

    const beforeUpload = file => {
        const isJpgOrPng =
          file.type === 'image/jpeg/pdf' ||
          file.type === 'image/png/pdf' ||
          file.type === 'application/pdf';
        if (!isJpgOrPng) {
          console.log('You can only upload JPG/PNG/PDF file!');
        //   message.error('You can only upload JPG/PNG/PDF file!');
        }
        return isJpgOrPng;
    };
    
  const submitEpisode = file => {
    console.log(file);
    //will replace with episode endpoint when ready
    axios
      .post('http://localhost:5000/api/upload/episode', file)
      .then(res => {
        console.log(res);
        setState({
          loading: false,
          dataUrl: res.data.url,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

    const onFinish = text => {
        console.log(text);
        //will replace with episode endpoint when ready
        axios
        .post('http://localhost:5000/api/upload/episode', text)
        .then(res => {
            console.log(res);
            setState({
                loading: false,
                dataUrl: res.data.url,
            });
        })
        .catch(err => {
            console.log(err);
        });
    };

    const handleChange = info => {
        if (info.file.status === 'uploading') {
        setState({ loading: true });
        return;
        }
        if (info.file.status === 'done') {
        // Get this url from response in real world.
            getBase64(info.file.originFileObj, dataUrl =>
            setState({
            dataUrl,
            loading: false,
            })
        );
        }
    };

    const { loading, dataUrl } = state;
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">Upload</div>
        </div>
    );

  const { TextArea } = Input;

  return (props.trigger)?(
    <div className="popup">
        <div className='popup-inner'>
            <h3>Add a Story</h3><br/>
            <img src={storyManagerImg} /><br/>
            <button className="close-button" onClick={() => props.setTrigger(false)}>
                Close
            </button>
            <UploadEpisode />
        </div>
    </div>
  ): "";
}

export default TestPopup;
