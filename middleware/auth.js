export default function({store, redirect}) {
    //not loggendIn
    if (!store.getters["authenticated"]) {
      redirect('/loginBtn');
    }
  }