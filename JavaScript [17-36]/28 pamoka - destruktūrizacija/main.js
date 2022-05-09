(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.table(users);

  console.groupCollapsed('Sukurkite funkciją, kuri atspausdina vartotojo vardą. Panaudokite šią funkciją, kad atspausdinti visų vartotojų vardus');
  {
    console.group('Be destruktūrizavimo');
    {

    }
    console.groupEnd();
    console.group('Su destruktūrizavimu');
    {

    }
    console.groupEnd();

  }
  console.groupEnd();

  console.groupCollapsed('Perfomuokite vartotojus, kad būtų tik savybės: id, name, email, phone');
  {
    console.group('Be destruktūrizavimo');
    {

    }
    console.groupEnd();
    console.group('Su destruktūrizavimu');
    {

    }
    console.groupEnd();
  }
  console.groupEnd();

  console.groupCollapsed('Atrinkite vartotojus, kurių el paštas baigiasi ".biz"');
  {
    console.group('Be destruktūrizavimo');
    {

    }
    console.groupEnd();
    console.group('Su destruktūrizavimu');
    {

    }
    console.groupEnd();
  }
  console.groupEnd();

  console.groupCollapsed('Sugrupuokite vartotojus, pagal jų puslapių pabaigas');
  /*
  {
    org: [
      {...},
      {...},
      ...
    ],
    net: [
      {...},
      {...},
      ...
    ],
    info: [
      {...},
      {...},
      ...
    ],
    biz: [
      {...},
      {...},
      ...
    ],
    ...
  }
  */
  {
    console.group('Be destruktūrizavimo');
    {

    }
    console.groupEnd();
    console.group('Su destruktūrizavimu');
    {

    }
    console.groupEnd();
  }
  console.groupEnd();
})();