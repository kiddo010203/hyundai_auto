import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/TestDrive.css';
import { useForm, Controller } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom'


function TestDrive() {
  const handleChange = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name);
    let data = { ...user };
    data[name] = value;

    if (name == 'gender') {
      data[name] = str2bool(value);
      console.log('gender');
      console.log(data[name]);
    }

    console.log(data);
    setUser(data);
  };
  var str2bool = (value) => {
    if (value && typeof value === 'string') {
      if (value.toLowerCase() === 'true') return true;
      if (value.toLowerCase() === 'false') return false;
    }
    return value;
  };
  const formatDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getYear();
    return day + '/' + month + '/' + year;
  };
  const saveUser = () => {
    console.log('save data', user);
    let method = 'POST';
    let id = '';   

    const requestOptions = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };
    fetch(
      'https://62b90e92ff109cd1dc8ad594.mockapi.io/user' + id,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        navigate(-1);
      });
  };
  const {
    register,
    handleSubmit,
    watch,
    label,
    required,
    formState: { errors },

  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [models, setModel] = useState([{ model: 'chon dong xe' }]);
  const [model_save, setModelSave] = useState(null);
  const [nameCar, setNameCar] = useState([{ name: 'chon mau xe' }]);
  const [carSave, setCarSave] = useState(null);
  const [user, setUser] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    let url = 'https://62b04951b0a980a2ef4f686d.mockapi.io/model_car/';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setModel(data);
      });
  }, []);
  const changeCar = (event) => {
    const target = event.target;
    const key = target.value;
    console.log(nameCar[key]);
    setCarSave(nameCar[key]);
  };

  const change = (event) => {
    const target = event.target;
    const value = target.value;
    setModelSave(value);

    fetch('https://62be5b370bc9b1256155ad45.mockapi.io/huyndai?model=' + value)
      .then((response) => response.json())
      .then((data) => {
        setNameCar(data);
        console.log(data);
      });
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="banner"></div>

          <div className="container">
            <ul className='Tieude'>
              <li className="list-group-item">
                <Link to="/" style={{ color: 'white' }}>Trang ch???</Link>
              </li>
              <li>
                <i class="fa-solid fa-angle-right"></i>
              </li>
              <li className="list-group-item">
                <Link to="" style={{ color: 'white' }}>????ng k?? l??i th???</Link>
              </li>
            </ul>
          </div>
          <div className="container">
            <div className="listLaithu">
              <div className="banner-text text-center" style={{paddingBottom:'18%'}}>
                <h1>????ng k?? l??i th???</h1>
                <h4>
                  B???n c?? th??? ????ng k?? l??i th??? t???i c??c ?????i l?? c???a Hyundai Th??nh
                  C??ng tr???i d??i tr??n to??n qu???c. Ch??ng t??i ??ang n??? l???c h???t m??nh
                  ????? b???n c?? nh???ng tr???i nghi???m l??i th??? m???t c??ch thu???n ti???n v?? th??
                  v??? nh???t.
                </h4>
              </div>
              <img
                className="banner-img"
                src="https://toigingiuvedep.vn/wp-content/uploads/2021/08/background-banner-dep.jpg"
              />
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} action="https://62b90e92ff109cd1dc8ad594.mockapi.io/user" method="POST">
            <table>
              <thead>
                <tr>
                  <th rowspan="3" width="50%" className='text-center'>
                    {carSave != null ? (
                      <img className='img-test' src={carSave.picture} />
                    ) : (
                      <div class="spinner-border text-dark" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    )}

                  </th>
                </tr>
                <tr>
                  <th>
                    D??ng xe ??t??<sup>*</sup>
                  </th>

                  <th>
                    T??n xe ??t?? <sup>*</sup>
                  </th>
                </tr>
                <tr>
                  <td>
                    <div>
                      {models != null ? (
                        <select
                          className="form-control"
                          name="model"
                          value={model_save}
                          onChange={(e) => change(e)}
                        >
                          <option>Ch???n d??ng xe</option>
                          {models.map((item) => (
                            <option value={item.model}>{item.model}</option>
                          ))}
                        </select>
                      ) : (
                        ''
                      )}
                    </div>
                  </td>
                  <td>
                    <div>
                      {nameCar != null ? (
                        <select
                          className="form-control"
                          name="namecar"
                          onChange={(e) => changeCar(e)}
                        >
                          <option>Ch???n m??u xe</option>
                          {nameCar.map((item, key) => (
                            <option value={key}>{item.name}</option>
                          ))}
                        </select>
                      ) : (
                        ''
                      )}
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="3">
                    <strong>Th??ng tin c?? nh??n</strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">
                    <strong>
                      Danh x??ng <sup>*</sup>
                    </strong>
                  </td>
                </tr>
                <tr colspan="3" class="form-check-inline">
                  <label class="form-check-label" for="radio1">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="radio1"
                      name="gender"
                      value="false"
                      checked
                      {...register("gender", { required: true })}
                      onChange={(e) => handleChange(e)}
                    ></input>
                 
                    ??ng
                  </label>
                  <label class="form-check-label" for="radio2">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="radio2"
                      name="gender"
                      value="true"
                      {...register("gender", { required: true })}
                      onChange={(e) => handleChange(e)}
                    ></input>
                    B??
                  </label>
                </tr>
                <tr>
                  <td>
                    <strong>
                      T??n<sup>*</sup>
                    </strong>
                  </td>
                  <td colspan="2">
                    <strong>
                      S?? ??i???n tho???i<sup>*</sup>
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name='name'
                      placeholder="Nh???p t??n c???a b???n"

                      {...register("name", { required: true })}
                      onChange={(e) => handleChange(e)}
                    />                     
                  </td>
                  <td colspan="2">
                    <input
                      type="text"
                      className="form-control"
                      name='phone'
                      placeholder="Nh???p s??? ??i???n tho???i c???a b???n"
                      {...register("phone", { required: true, minLength: 10, maxLength: 10 })}
                      onChange={(e) => handleChange(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Email</strong>
                  </td>
                  <td colspan="2">
                    <strong>?????a ch???</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Nh???p email c???a b???n"
                      name='email'
                      {...register("email", { required: true })}
                      onChange={(e) => handleChange(e)}
                    />
                  </td>
                  <td colspan="2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nh???p ?????a ch??? c???a b???n"
                      name='address'
                      {...register("address", { required: true })}
                      onChange={(e) => handleChange(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Ng??y l??i th???</strong>
                  </td>
                  <td colspan="2">
                    <strong>
                      Ch???n ?????i l??
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Ch???n ng??y"
                      name='TestDrive'
                      {...register("testDrive")}
                      onChange={(e) => handleChange(e)}
                    />
                  </td>
                  <td colspan="2">
                    <select className="form-control" name='store'{...register("store")}
                      onChange={(e) => handleChange(e)} >
                      <option selected="selected" data-v-70f709c0>
                        Ch???n ?????i l??
                      </option>{' '}
                      <option value="1" data-v-70f709c0>
                        Hyundai Kinh D????ng V????ng 3s
                      </option>
                      <option value="2" data-v-70f709c0>
                        Hyundai Vi???t H??n 3s
                      </option>
                      <option value="3" data-v-70f709c0>
                        Hyundai Ng???c An 3s
                      </option>
                      <option value="4" data-v-70f709c0>
                        Hyundai An Kh??nh 3S
                      </option>
                      <option value="6" data-v-70f709c0>
                        Hyundai Vinh
                      </option>
                      <option value="7" data-v-70f709c0>
                        Hyundai H???i Ph??ng
                      </option>
                      <option value="8" data-v-70f709c0>
                        Hyundai ????ng Anh
                      </option>
                      <option value="9" data-v-70f709c0>
                        Hyundai Long Bi??n
                      </option>
                      <option value="10" data-v-70f709c0>
                        Hyundai H?? ????ng
                      </option>
                      <option value="11" data-v-70f709c0>
                        Hyundai Ph???m H??ng
                      </option>
                      <option value="12" data-v-70f709c0>
                        Hyundai Ph???m V??n ?????ng
                      </option>
                      <option value="13" data-v-70f709c0>
                        Hyundai L?? V??n L????ng 1S
                      </option>
                      <option value="14" data-v-70f709c0>
                        Hyundai ????ng ???? 3S
                      </option>
                      <option value="15" data-v-70f709c0>
                        Hyundai An Kh??nh 1S
                      </option>
                      <option value="16" data-v-70f709c0>
                        Hyundai L?? V??n L????ng 1S
                      </option>
                      <option value="17" data-v-70f709c0>
                        Hyundai Gi???i Ph??ng 3S
                      </option>
                      <option value="19" data-v-70f709c0>
                        Hyundai C???u Di???n
                      </option>
                      <option value="22" data-v-70f709c0>
                        Hyundai Gia ?????nh Showroom 1S
                      </option>
                      <option value="24" data-v-70f709c0>
                        Hyundai Tr?????ng Chinh 1S
                      </option>
                      <option value="25" data-v-70f709c0>
                        Hyundai Gia ?????nh 3S
                      </option>
                      <option value="27" data-v-70f709c0>
                        Hyundai Vi???t H??n 1S
                      </option>
                      <option value="30" data-v-70f709c0>
                        Hyundai Ng???c An 1S
                      </option>
                      <option value="31" data-v-70f709c0>
                        Hyundai Mi???n Nam 3S
                      </option>
                      <option value="32" data-v-70f709c0>
                        Hyundai Mi???n Nam 1S
                      </option>
                      <option value="33" data-v-70f709c0>
                        Hyundai ????ng S??i G??n X?????ng D???ch v??? 2S (tr??? s??? ch??nh)
                      </option>
                      <option value="34" data-v-70f709c0>
                        Hyundai ????ng S??i G??n ph??ng tr??ng b??y 1S
                      </option>
                      <option value="35" data-v-70f709c0>
                        Hyundai Tr?????ng Chinh 3S
                      </option>
                      <option value="36" data-v-70f709c0>
                        Hyundai B??nh Ph?????c
                      </option>
                      <option value="37" data-v-70f709c0>
                        Hyundai T??y Ninh
                      </option>
                      <option value="38" data-v-70f709c0>
                        Hyundai B??nh Thu???n
                      </option>
                      <option value="39" data-v-70f709c0>
                        Hyundai Long An
                      </option>
                      <option value="40" data-v-70f709c0>
                        Hyundai ?????ng Th??p 1S
                      </option>
                      <option value="41" data-v-70f709c0>
                        Hyundai ?????ng Th??p 3S
                      </option>
                      <option value="42" data-v-70f709c0>
                        Hyundai An Giang
                      </option>
                      <option value="43" data-v-70f709c0>
                        Hyundai B?? R???a V??ng T??u
                      </option>
                      <option value="44" data-v-70f709c0>
                        Hyundai Ti???n Giang
                      </option>
                      <option value="45" data-v-70f709c0>
                        Hyundai Ki??n Giang
                      </option>
                      <option value="46" data-v-70f709c0>
                        Hyundai T??y ????
                      </option>
                      <option value="47" data-v-70f709c0>
                        Hyundai B???n Tre
                      </option>
                      <option value="48" data-v-70f709c0>
                        Hyundai V??nh Long
                      </option>
                      <option value="49" data-v-70f709c0>
                        Hyundai B???c Li??u
                      </option>
                      <option value="50" data-v-70f709c0>
                        Hyundai C?? Mau
                      </option>
                      <option value="51" data-v-70f709c0>
                        Hyundai Ng???c Ph??t
                      </option>
                      <option value="52" data-v-70f709c0>
                        Hyundai Ng???c Ph??t (?????a ??i???m Amata)
                      </option>
                      <option value="53" data-v-70f709c0>
                        Hyundai B??nh D????ng 3S (Chi nh??nh Th??nh Ph??? M???i)
                      </option>
                      <option value="54" data-v-70f709c0>
                        Hyundai B??nh D????ng 1S
                      </option>
                      <option value="55" data-v-70f709c0>
                        Hyundai Vinh 1S
                      </option>
                      <option value="56" data-v-70f709c0>
                        Hyundai S??ng H??n
                      </option>
                      <option value="57" data-v-70f709c0>
                        Hyundai S??n Tr??
                      </option>
                      <option value="58" data-v-70f709c0>
                        Hyundai Thanh H??a
                      </option>
                      <option value="59" data-v-70f709c0>
                        Hyundai H?? T??nh
                      </option>
                      <option value="60" data-v-70f709c0>
                        Hyundai Qu???ng B??nh
                      </option>
                      <option value="61" data-v-70f709c0>
                        Hyundai Qu???ng Tr???
                      </option>
                      <option value="62" data-v-70f709c0>
                        Hyundai Hu??? 3S
                      </option>
                      <option value="63" data-v-70f709c0>
                        Hyundai Hu??? 1S
                      </option>
                      <option value="64" data-v-70f709c0>
                        Hyundai Qu???ng Nam
                      </option>
                      <option value="65" data-v-70f709c0>
                        Hyundai Qu???ng Ng??i
                      </option>
                      <option value="66" data-v-70f709c0>
                        Hyundai B??nh ?????nh
                      </option>
                      <option value="67" data-v-70f709c0>
                        Hyundai Gia Lai
                      </option>
                      <option value="68" data-v-70f709c0>
                        Hyundai ????k L??k
                      </option>
                      <option value="69" data-v-70f709c0>
                        Hyundai Nha Trang
                      </option>
                      <option value="70" data-v-70f709c0>
                        Hyundai ???? L???t
                      </option>
                      <option value="74" data-v-70f709c0>
                        Hyundai Ph?? Y??n 1S
                      </option>
                      <option value="105" data-v-70f709c0>
                        Hyundai S??n T??y 3S
                      </option>
                      <option value="106" data-v-70f709c0>
                        Hyundai L??o Cai
                      </option>
                      <option value="107" data-v-70f709c0>
                        Hyundai Tuy??n Quang 3S
                      </option>
                      <option value="108" data-v-70f709c0>
                        Hyundai Th??i Nguy??n
                      </option>
                      <option value="109" data-v-70f709c0>
                        Hyundai Y??n B??i 3S
                      </option>
                      <option value="110" data-v-70f709c0>
                        Hyundai S??n La
                      </option>
                      <option value="111" data-v-70f709c0>
                        Hyundai Vi???t Tr??
                      </option>
                      <option value="112" data-v-70f709c0>
                        Hyundai V??nh Y??n
                      </option>
                      <option value="113" data-v-70f709c0>
                        Hyundai Qu???ng Ninh 3S
                      </option>
                      <option value="114" data-v-70f709c0>
                        Hyundai B???c Giang
                      </option>
                      <option value="115" data-v-70f709c0>
                        Hyundai B???c Ninh 3S
                      </option>
                      <option value="116" data-v-70f709c0>
                        Hyundai B???c Ninh 1S
                      </option>
                      <option value="117" data-v-70f709c0>
                        Hyundai H???i D????ng
                      </option>
                      <option value="118" data-v-70f709c0>
                        Hyundai H??ng Y??n
                      </option>
                      <option value="119" data-v-70f709c0>
                        Hyundai Nam ?????nh 3S
                      </option>
                      <option value="120" data-v-70f709c0>
                        Hyundai Th??i B??nh 3S
                      </option>
                      <option value="121" data-v-70f709c0>
                        Hyundai Ninh B??nh
                      </option>
                      <option value="129" data-v-70f709c0>
                        Hyundai Long An 1S
                      </option>
                      <option value="137" data-v-70f709c0>
                        Hyundai L?? V??n L????ng 3S
                      </option>
                      <option value="150" data-v-70f709c0>
                        Hyundai ?????i ?????ng Ti???n
                      </option>
                      <option value="152" data-v-70f709c0>
                        Hyundai Ph???m V??n ?????ng 1S
                      </option>
                      <option value="153" data-v-70f709c0>
                        Hyundai Ninh B??nh 1S
                      </option>
                      <option value="158" data-v-70f709c0>
                        Hyundai Huy Long
                      </option>
                      <option value="159" data-v-70f709c0>
                        Hyundai Qu???ng Ninh 1S
                      </option>
                      <option value="165" data-v-70f709c0>
                        Hyundai H??ng Y??n - CN Ph??? N???i (2S)
                      </option>
                      <option value="166" data-v-70f709c0>
                        Hyundai Thanh H??a ??? Chi nh??nh Ng???c L???c
                      </option>
                      <option value="167" data-v-70f709c0>
                        Hyundai An Ph?? 1S
                      </option>
                      <option value="168" data-v-70f709c0>
                        Hyundai Ho?? B??nh
                      </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">
                    <strong>Ghi ch??</strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">
                    <textarea
                      className="form-control"
                      placeholder="Ghi ch?? c???a b???n "
                      name='bio'
                      {...register("gender1", { maxLength: 300 })}
                      onChange={(e) => handleChange(e)}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox" name='agree' {...{ required: true }}

                      />

                      T??i ???? ?????c ch???p thu???n<sub>*</sub>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    Quy???n ri??ng t?? c???a b???n r???t quan tr???ng v???i Hyundai Ho??ng C???u,
                    c??ng nh?? s??? tin t?????ng c???a b???n v???i c??c s???n ph???m v?? d???ch v???
                    c???a Hyundai. Ch??ng t??i c??? g???ng b???o v??? quy???n ri??ng t?? tr???c
                    tuy???n c???a b???n, ?????ng th???i mang t???i tr???i nghi???m trang web th??
                    v??? cung c???p th??ng tin, s???n ph???m v?? d???ch v??? c?? li??n quan h???u
                    ??ch cho b???n. Khi ????ng k?? l??i th???, b???n ?????ng ?? v???i c??c ??i???u
                    kho???n tr??n v???i Hyundai Ho??ng C???u.
                  </td>
                </tr>

                <tr>
                  <td><Link to='/thanhcong'>          
                    <input type="submit" className="btn btn-primary"
                      onClick={() => saveUser()}></input></Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <br />
      </div>
    </>
  );
}
export default TestDrive;
