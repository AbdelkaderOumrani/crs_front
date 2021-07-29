import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { login, isLoading } = useAuth();
  const onFinish = (values: { email: string; password: string }) => {
    login(values.email, values.password);
  };

  return (
    <Row justify="center">
      <Col span={10}>
        <Form onFinish={onFinish} layout="vertical">
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
              Se connecter
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
