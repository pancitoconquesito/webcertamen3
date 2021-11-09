import {Curso} from './models/curso.model';
import {Nota} from './models/nota.model';

export let listaCurso:Array<Curso>=[
    {
        _id:0,
        nombre:'ing web',
        promedio:0,
        notas:[
            {_id:0, nota:7, porcentaje:0.2},
            {_id:0, nota:7, porcentaje:0.3},
            {_id:0, nota:7, porcentaje:0.5}
        ]
    },
    {
        _id:1,
        nombre:'ing soft',
        promedio:0,
        notas:[
            {_id:0, nota:6.2, porcentaje:0.2},
            {_id:0, nota:5, porcentaje:0.2},
            {_id:0, nota:3.5, porcentaje:0.2},
            {_id:0, nota:6, porcentaje:0.2},
            {_id:0, nota:5.5, porcentaje:0.2},
        ]
    },
    {
        _id:2,
        nombre:'ingles',
        promedio:0,
        notas:[
            {_id:0, nota:6, porcentaje:0.5},
            {_id:0, nota:2, porcentaje:0.5}
        ]
    }
];
