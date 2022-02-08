import axios from 'axios';
import React, { useState } from 'react';
import { Upload, message, Form, Input, Button } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function UploadEpisode(props) {
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
      message.error('You can only upload JPG/PNG/PDF file!');
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

  return (
    <div>
      <Upload
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        //will replace with correct url from backend
        action={submitEpisode}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {dataUrl ? (
          <img src={dataUrl} alt="avatar" style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
      <Form name="complex-form" onFinish={onFinish}>
        <Form.Item>
          <Form.Item name="Story Text">
            <TextArea rows={4} placeholder="Input Text for story episode" />
          </Form.Item>
        </Form.Item>
        <Form.Item label=" " colon={false}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <button onClick={() => props.setTrigger(false)}>
          Close
      </button>
    </div>
  );
}

export default UploadEpisode;

