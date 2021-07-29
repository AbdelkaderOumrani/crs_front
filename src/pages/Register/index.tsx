import { Form, Input, Button, Row, Col } from "antd";
import useAuth from "../../hooks/useAuth";
import { IUserRegister } from "../../types/users";

const Register = () => {
  const { register, isLoading } = useAuth();
  const onFinish = (values: IUserRegister) => {
    register(values);
  };

  return (
    <Row justify="center">
      <Col span={10}>
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            label="Nom & Prénom"
            name="fullName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true },
              {
                type: "email",
                message: "Email obligatoire",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={isLoading}>
              S'enregistrer
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
