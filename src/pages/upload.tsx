import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { UploadChangeParam } from 'antd/es/upload';

const { Dragger } = Upload;



const UploadCompent: React.FC = () => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [uploading, setUploading] = useState(false);
    const [pdfContent,setPdfContent] =  useState('');
    // const handleUpload = () => {
    //   const formData = new FormData();
    //   fileList.forEach((file) => {
    //     formData.append('files[]', file as RcFile);
    //   });
    //   setUploading(true);
    //   // You can use any AJAX library you like
    //   fetch('https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188', {
    //     method: 'POST',
    //     body: formData,
    //   })
    //     .then((res) => res.json())
    //     .then(() => {
    //       setFileList([]);
    //       message.success('upload successfully.');
    //     })
    //     .catch(() => {
    //       message.error('upload failed.');
    //     })
    //     .finally(() => {
    //       setUploading(false);
    //     });
    // };
  
    const props: UploadProps = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);
    
            return true;
        },
        fileList,
        showUploadList:true,
        name: 'file',
        accept:".pdf",
        multiple: true,
        action: '/upload',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
            console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                setPdfContent(info.file.response)
            } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
  
    return (
        <div style={{height:'100%',display:'flex'}}>
            <div  style={{width:'50%',height:'80%'}}>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                    <InboxOutlined style={{ fontSize: '72px', color: '#fff' }}/>
                    </p>
                    <p className="ant-upload-text" style={{color:'#fff'}}>Click or drag file to this area to upload</p>
                </Dragger>
            </div>
            <div style={{width:'50%',backgroundColor:'#108ee9'}}>
                {pdfContent?<textarea style={{width:'100%',height:'80%'}}>{pdfContent}</textarea>:''}
            </div>
      </div>
    );
  };

  export default UploadCompent;