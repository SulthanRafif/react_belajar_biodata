import React, { Component } from 'react';
import BiodataComponent from '../component/BiodataComponent';

export default class Biodata extends Component {
    render() {
        return (
            <div>
                <BiodataComponent name="Nama : Sulthan Rafif" job="Pekerjaan : Mahasiswa" college="Kampus : Politeknik Negeri Malang" alamat="Alamat : Jl. Gondosuli No. 2"/>
            </div>
        );
    }
}
