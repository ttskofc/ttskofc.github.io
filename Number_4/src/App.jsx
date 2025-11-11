import React from "react";
import { Layout, Menu, Row, Col, Card, Typography } from "antd";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#333", padding: "10px 0" }}>
        <div
          style={{
            margin: "0 0 60px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              background: "#555",
              color: "#fff",
              padding: 10,
              borderRadius: 6,
              width: 50,
              height: 50,
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2tKzW5qDI85T5brNwN9qnRgLe89vNjPVQg&s"
              alt=""
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
                width: "100%",
                height: "100%",
                display: "block",
              }}
            />
          </div>
          <Title level={4} style={{ color: "#fff", margin: 0 }}>
            Название сайта
          </Title>
        </div>
      </Header>

      <div style={{}}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: 6 }}>
          <Menu
            mode="vertical"
            selectable={false}
            items={[
              { key: "1", label: "Ссылка 1" },
              { key: "2", label: "Ссылка 2" },
              { key: "3", label: "Ссылка 3" },
            ]}
            style={{
              background: "#333",
            }}
          />
        </div>
      </div>

      <Content>
        <div
          className="container main-flex"
          style={{ maxWidth: 960, margin: "0 auto", padding: "16px" }}
        >
          {}

          <section className="links">
            <Card title="Список гиперссылок" style={{ marginBottom: 16 }}>
              <ul>
                <li>
                  <a href="http://kubsu.ru">
                    Абсолютная гиперссылка на главную страницу сайта kubsu.ru
                  </a>
                </li>
                <li>
                  <a href="https://kubsu.ru">
                    Абсолютная гиперссылка на главную сайта kubsu.ru в протоколе
                    https
                  </a>
                </li>
                <li>
                  <a href="https://kubsu.ru">
                    <img
                      src="https://avatars.mds.yandex.net/i?id=8b25546781ae3c214d2422f8e1a9763bf75040bd-4120868-images-thumbs&n=13"
                      alt="Ссылка-изображение"
                      width="300"
                      height="300"
                    />
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    {" "}
                    Сокращенная ссылка на внутреннюю страницу
                  </a>
                </li>
                <li>
                  <a href="/"> Сокращённая ссылка на главную страницу </a>
                </li>
                <li>
                  <a href="#a1"> Ссылка на фрагмент текущей страницы </a>
                </li>
                <li>
                  <a href="/index?size=m&color=black&page=1">
                    Ссылка с тремя параметрами в URL
                  </a>
                </li>
                <li>
                  <a href="/index?id=id"> Ссылка с параметром id в URL </a>
                </li>
                <li>
                  <a href="./index.html">
                    Относительная ссылка на страницу в текущем каталоге
                  </a>
                </li>
                <li>
                  <a href="/about/aboutus.html">
                    Относительная ссылка на страницу в каталоге about
                  </a>
                </li>
                <li>
                  <a href="../index.html">
                    Относительная ссылка на страницу в каталоге уровнем выше
                    текущего
                  </a>
                </li>
                <li>
                  <a href="../../index.html">
                    Относительная ссылка на страницу в каталоге двумя уровнями
                    выше
                  </a>
                </li>
                <li>
                  <a href="#a1"> Контекстная ссылка </a> в тексте абзаца
                </li>
                <li>
                  <a href="https://www.kubsu.ru/ru/node/2650">
                    Ссылка на фрагмент страницы стороннего сайта
                  </a>
                </li>
                <li>
                  <p>
                    Ссылки из прямоугольных и круглых областей картинки
                    (HTML-тег map): <br />
                    <img
                      src="https://rus.team/images/article/20446/2019-07-29-294_43299-1_146855.webp"
                      alt="Картинка с разными областями"
                      height="100"
                      width="250"
                      usemap="#map"
                    />
                    <map name="map">
                      <area shape="circle" coords="75,75,75" href="left.html" />
                      <area
                        shape="rect"
                        coords="150,0,250,100"
                        href="right.html"
                      />

                      <area
                        shape="circle"
                        coords="100,100,50"
                        href="https://ya.ru"
                      />
                    </map>
                  </p>
                </li>
                <li>
                  <a href=""> Ссылка с пустым href </a>
                </li>
                <li>
                  <a> Ссылка без href </a>
                </li>
                <li>
                  <a href="/no-follow" rel="nofollow">
                    Ссылка, по которой запрещен переход поисковикам
                  </a>
                </li>
                <li>
                  <a href="/no-index" rel="noindex">
                    Запрещенная ссылка для индексации поисковиками
                  </a>
                </li>
                <li>
                  Нумерованный список ссылок с подписями title:
                  <ol>
                    <li>
                      <a href="/link1" title="Ссылка 1">
                        {" "}
                        Ссылка 1{" "}
                      </a>
                    </li>
                    <li>
                      <a href="/link2" title="Ссылка 2">
                        {" "}
                        Ссылка 2{" "}
                      </a>
                    </li>
                    <li>
                      <a href="/link3" title="Ссылка 3">
                        {" "}
                        Ссылка 3{" "}
                      </a>
                    </li>
                  </ol>
                </li>
                <li>
                  <a href="ftp://user:password@example/file.txt">
                    Ссылка на файл на сервере FTP с авторизацией
                  </a>
                </li>
              </ul>
            </Card>
          </section>

          <section className="form">
            <Card title="Форма" style={{ marginBottom: 16 }}>
              <form action="/" method="POST">
                <label>
                  ФИО: <br />
                  <input name="name" placeholder="Введите ваше ФИО" />
                </label>
                <br />

                <label>
                  Номер телефона:
                  <input
                    name="tel"
                    type="tel"
                    placeholder="Введите номер телефона"
                  />
                </label>
                <br />

                <label>
                  Email (электронная почта):
                  <input
                    name="email"
                    type="email"
                    placeholder="Введите ваш email"
                  />
                </label>
                <br />

                <label>
                  Дата рождения:
                  <input name="date" value="2025-01-01" type="date" />
                </label>
                <br />

                <label>
                  Пол:
                  <input type="radio" name="group-1" />
                  Мужской
                </label>

                <label>
                  <input type="radio" name="group-1" />
                  Женский
                </label>
                <br />

                <br />

                <label>
                  Любимый язык программирования: <br />
                  <select name="language[]" multiple>
                    <option selected="selected">Pascal</option>
                    <option>C</option>
                    <option>C++</option>
                    <option>JavaScript</option>
                    <option>PHP</option>
                    <option>Python</option>
                    <option>Java</option>
                    <option>Haskel</option>
                    <option>Clojure</option>
                    <option>Prolog</option>
                    <option>Scala</option>
                  </select>
                </label>
                <br />

                <label>
                  Биография <br />
                  <textarea
                    name="field-name-3"
                    placeholder="Напишите о себе"
                  ></textarea>
                </label>
                <br />

                <label>
                  <input type="checkbox" checked="checked" name="confirm" />С
                  контрактом ознакомлен(а)
                </label>
                <br />

                <input type="submit" value="Сохранить" />
              </form>
            </Card>
          </section>

          <section className="table-section">
            <Card title="Таблица">
              <table className="simple-table" style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th rowSpan="2">Колонка 1</th>
                    <th colSpan="2">Группа колонок</th>
                    <th rowSpan="2">Колонка 4</th>
                  </tr>
                  <tr>
                    <th>Колонка 2</th>
                    <th>Колонка 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ячейка</td>
                    <td>Ячейка</td>
                    <td>Ячейка</td>
                    <td>Ячейка</td>
                  </tr>
                  <tr>
                    <td>Ячейка</td>
                    <td>Ячейка</td>
                    <td>Ячейка</td>
                    <td>Ячейка</td>
                  </tr>
                  <tr>
                    <td>Ячейка</td>
                    <td>Ячейка</td>
                    <td>Ячейка</td>
                    <td>Ячейка</td>
                  </tr>
                  <tr>
                    <td>Ячейка</td>
                    <td>Ячейка</td>
                    <td>Ячейка</td>
                    <td>Ячейка</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </section>
        </div>
      </Content>

      <Footer
        style={{ textAlign: "center", background: "#333", color: "#fff" }}
      >
        (c) Тоцкий Данил
      </Footer>
    </Layout>
  );
}
