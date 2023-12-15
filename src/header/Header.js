import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <header className="header">
            <Navbar bg="primary" expand="lg" variant="dark">
                <div className="container-fluid text-light">
                    <Navbar.Brand href="#">COMMIT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="me-auto mb-2 mb-lg-0">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="뉴스" id="news-dropdown">
                                <NavDropdown.Item href="./src/issue.js">IT 이슈</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="./src/company.js">국내 기업</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="./src/conference.js">대외 활동</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Acorn_commit/views/job/job.html">채용 공고</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="커뮤니티" id="community-dropdown">
                                <NavDropdown.Item href="/Acorn_commit/views/community/community_list.html">이직/신입</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Acorn_commit/views/community/community_list.html">자소서</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Acorn_commit/views/community/community_list.html">면접</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Acorn_commit/views/community/community_list.html">합격자조언</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Acorn_commit/views/community/community_list.html">구인/구직</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/Acorn_commit/views/member/join.html">회원가입</Nav.Link>
                            <Nav.Link href="/Acorn_commit/views/member/login.html">로그인</Nav.Link>
                            <Nav.Link href="/Acorn_commit/views/mypage/mypage.html">마이페이지</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </header>
    )
}
export default Header