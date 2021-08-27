import React from 'react';
import { shallow } from 'enzyme';
import ClickCounter from './ClickCounter';

// o primeiro parametro do it() é o nome do seu teste

it('ClickCounter deve ter o total de cliques igual a 2', () => {
    const meuComponente = shallow(<ClickCounter />) // se o componente recebe props, podemos pasasar, ex: <ClickCounter teste={propsTeste}

    //find é para procurar inputs no compoente testado
    //simulate é para testar eventos e como queremos testar 2 clicks foi chamado o simulate 2 vezes
    // expext é passado o componente e qual estado dentro dele sera verificado no exemplo se é igual a 2 
    meuComponente.find('input').simulate('change').simulate('change');
    expect(meuComponente.state().totalClicks).toEqual(2);
})