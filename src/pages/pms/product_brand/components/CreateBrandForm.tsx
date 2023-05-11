import React, { useEffect } from 'react';
import {Form, Input, Modal} from 'antd';
import type {BrandListItem} from '../data.d';

export interface CreateFormProps {
  onCancel: () => void;
  onSubmit: (values: BrandListItem) => void;
  createModalVisible: boolean;
}
const FormItem = Form.Item;

const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};

const CreateBrandForm: React.FC<CreateFormProps> = (props) => {
  const [form] = Form.useForm();

  const { onSubmit, onCancel, createModalVisible } = props;

  useEffect(() => {
    if (form && !createModalVisible) {
      form.resetFields();
    }
  }, [props.createModalVisible]);

  const handleSubmit = () => {
    if (!form) return;
    form.submit();
  };

  const handleFinish = (values: BrandListItem) => {
    if (onSubmit) {
      onSubmit(values);
    }
  };

  const renderContent = () => {
    return (
      <>
        <FormItem name="name" label="品牌名">
          <Input id="update-name" placeholder={'请输入品牌名'} />
        </FormItem>
        <FormItem name="productCount" label="产品数量">
          <Input id="update-productCount" placeholder={'请输入产品数量'} />
        </FormItem>
        <FormItem name="logo" label="品牌logo">
          <Input id="update-logo" placeholder={'请输入品牌logo'} />
        </FormItem>
        <FormItem name="bigPic" label="专区大图">
          <Input id="update-bigPic" placeholder={'请输入专区大图'} />
        </FormItem>
        <FormItem name="brandStory" label="品牌故事">
          <Input id="update-brandStory" placeholder={'请输入品牌故事'} />
        </FormItem>
      </>
    );
  };

  const modalFooter = { okText: '保存', onOk: handleSubmit, onCancel };

  return (
    <Modal
      forceRender
      destroyOnClose
      title="新建品牌"
      open={createModalVisible}
      {...modalFooter}
    >
      <Form {...formLayout} form={form} onFinish={handleFinish}>
        {renderContent()}
      </Form>
    </Modal>
  );
};

export default CreateBrandForm;
