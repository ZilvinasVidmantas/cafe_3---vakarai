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

  console.group('Sugrupuokite vartotojus, pagal jų puslapių pabaigas');
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
      const groupedByDomainExtension = users.reduce((prevGrouped, user) => {
        const ext = user.website.slice(user.website.lastIndexOf('.') + 1)
        if (!prevGrouped[ext]) {
          prevGrouped[ext] = [];
        }
        prevGrouped[ext].push(user)

        return prevGrouped;
      }, {});

      console.log(groupedByDomainExtension);
    }
    console.groupEnd();
    console.group('Su destruktūrizavimu');
    {
      const groupedByDomainExtension = users.reduce((prevGrouped, user) => {
        const { website } = user;
        const ext = website.slice(website.lastIndexOf('.') + 1)
        if (!prevGrouped[ext]) {
          prevGrouped[ext] = [];
        }
        prevGrouped[ext].push(user)

        return prevGrouped;
      }, {});

      console.log(groupedByDomainExtension);
    }
    console.groupEnd();
  }
  console.groupEnd();
})();

// 20:20