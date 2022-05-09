(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.table(users);

  console.groupCollapsed('Sukurkite funkciją, kuri atspausdina vartotojo vardą. Panaudokite šią funkciją, kad atspausdinti visų vartotojų vardus');
  {
    console.group('Be destruktūrizavimo');
    {
      const printFullName = (person) => console.log(person.name);

      users.forEach(printFullName);
    }
    console.groupEnd();
    console.group('Su destruktūrizavimu');
    {
      users.forEach(({ name }) => console.log(name));
    }
    console.groupEnd();

  }
  console.groupEnd();

  console.groupCollapsed('Perfomuokite vartotojus, kad būtų tik savybės: id, name, email, phone');
  {
    console.group('Be destruktūrizavimo');
    {
      const userFormatted = users.map((person) => ({
        id: person.id,
        name: person.name,
        email: person.email,
        phone: person.phone,
      }));

      console.table(userFormatted);
    }
    console.groupEnd();
    console.group('Su destruktūrizavimu');
    {
      const userFormatted = users.map(
        ({ id, name, email, phone }) => ({ id, name, email, phone })
      );

      console.table(userFormatted);
    }
    console.groupEnd();
  }
  console.groupEnd();

  console.group('Atrinkite vartotojus, kurių el paštas baigiasi ".biz"');
  {
    console.group('Be destruktūrizavimo');
    {
      const usersWithBizEmail = users.filter((user) => {
        const ext = user.email.split('.').reverse()[0];

        return ext === 'biz';
      });

      console.table(usersWithBizEmail);
    }
    console.groupEnd();
    console.group('Su destruktūrizavimu');
    {
      const usersWithBizEmail = users.filter(({ email }) => email.split('.').reverse()[0] === 'biz');
      console.table(usersWithBizEmail);
    }
    console.groupEnd();
  }
  console.groupEnd();

  console.groupCollapsed('Sugrupuokite vartotojus, pagal jų puslapių pabaigas');
  {
    console.group('Be destruktūrizavimo');
    {
      const groupedByDomainExtension = users.reduce((prevGrouped, user) => {
        const ext = user.website.slice(user.website.lastIndexOf('.') + 1)
        if (!prevGrouped[ext]) {
          prevGrouped[ext] = [];
        }
        prevGrouped[ext].push(user);

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
