import { Layout, Space, Avatar, Typography, Row, Col, Button } from "antd";
import useAuth from "../hooks/useAuth";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header } = Layout;

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  return (
    <Header>
      <Row justify="space-between">
        <Col>
          <div
            style={{
              width: 120,
              height: 31,
              margin: "16px 24px 16px 0",
              background: "rgba(255, 255, 255, 0.3)",
            }}
          />
        </Col>

        {isAuthenticated && user ? (
          <Col
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Space>
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
              <Typography.Text
                style={{ color: "white" }}
                onClick={() => {
                  logout();
                }}
              >
                {user.fullName}
              </Typography.Text>
              <Button danger type="primary" onClick={logout}>
                <LogoutOutlined />
              </Button>
            </Space>
          </Col>
        ) : (
          <Col>
            <Space>
              <Link to="/login">
                <Button type="primary">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </Space>
          </Col>
        )}
      </Row>
    </Header>
  );
};

export default Navbar;
