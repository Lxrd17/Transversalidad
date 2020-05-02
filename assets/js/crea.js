var characters = [
    {
      name: "Ismael",
      dob: "11 January 1165",
      weapons: "Assassin Sword",
      avatar: 'https://cdn.rawgit.com/shelune/ui-components/master/avatars/avatar--altair.jpg',
      portrait: 'https://cdn.rawgit.com/shelune/ui-components/master/portraits/portrait--altair.png',
      intro: "Altaïr Ibn-La'Ahad (1165 – 1257) was a Syrian-born member of the Levantine Brotherhood of Assassins and served as their Mentor from 1191 until his death in 1257. During his tenure as Mentor, Altaïr made several discoveries and inventions that greatly helped the Order's progression. His leadership saw to the spread of the Assassins' influence in the Old World.",
      version: 'AC I' },
    
    {
      name: 'Rosete Zepeda Ismael',
      avatar: 'autores/LXRD.jpg',
      portrait: 'autores/',
      intro: 'Ezio Auditore da Firenze (1459 – 1524) was a Florentine nobleman during the Renaissance, and, unbeknownst to most historians and philosophers, the Mentor of the Italian Brotherhood of Assassins, a title which he held from 1503 to 1513. He is also an ancestor to William and Desmond Miles, as well as Clay Kaczmarek.',
      version: 'AC II' },
    
    {
      name: 'Connor Kenway',
      dob: '4 April 1756',
      weapons: 'Assassin Tomahawk',
      avatar: 'https://cdn.rawgit.com/shelune/ui-components/master/avatars/avatar--connor.jpg',
      portrait: 'https://cdn.rawgit.com/shelune/ui-components/master/portraits/portrait--connor.png',
      intro: "Ratonhnhaké:ton (1756 – unknown), often known by the adopted name of Connor, was a Master Assassin of the Colonial Brotherhood of Assassins during the period of the American Revolutionary War. Born into the Kanien'kehá:ka tribe, he is an ancestor of Desmond Miles, through the paternal line.",
      version: 'AC III' },
    
    {
      name: 'Edward Kenway',
      dob: '10 March 1693',
      weapons: 'Assassin Cutlass & Pistol',
      avatar: 'https://cdn.rawgit.com/shelune/ui-components/master/avatars/avatar--edward.jpg',
      portrait: 'https://cdn.rawgit.com/shelune/ui-components/master/portraits/portrait--edward.png',
      intro: 'Edward James Kenway (1693 – 1735) was a Welsh-born British privateer-turned-pirate and a member of the Assassin Order. Born to farmers, Edward sought to acquire riches and fame. He became a privateer for the Royal Navy early in his life and, once accepted, found himself stationed in the West Indies.',
      version: 'AC IV' },
    
    {
      name: 'Arno Dorian',
      dob: '26 August 1768',
      weapons: 'Assassin Rapier',
      avatar: 'https://cdn.rawgit.com/shelune/ui-components/master/avatars/avatar--arno.jpg',
      portrait: 'https://cdn.rawgit.com/shelune/ui-components/master/portraits/portrait--arno.png',
      intro: "Arno Victor Dorian (1768 – unknown) was a French-Austrian Assassin active during the time of the French Revolution. The son of the Assassin Charles Dorian, who was killed by Shay Cormac, Arno was adopted by François de la Serre, the Grand Master of the Templar Order in France. He was subsequently raised alongside de la Serre's daughter, Élise.",
      version: 'AC V' },
    {
      name: 'Evie Frye',
      dob: '9 November 1847',
      weapons: 'Assassin Kukri',
      avatar: 'https://cdn.rawgit.com/shelune/ui-components/master/avatars/avatar--evie.jpg',
      portrait: 'https://cdn.rawgit.com/shelune/ui-components/master/portraits/portrait--evie.png',
      intro: 'Dame Evie Frye (1847 – unknown) was a Master Assassin of the British Brotherhood active in London during the Victorian era, and the elder twin sister of Jacob Frye. She was also a member of the Order of the Sacred Garter, and the grand-aunt of Lydia Frye.',
      version: 'AC VI' }];
    var Profile = React.createClass({ displayName: "Profile",
      render: function () {
        return (
          React.createElement("div", { className: "Profile" },
          React.createElement(ProfilePortrait, { source: this.props.content.portrait }),
          React.createElement(ProfileBio, { content: this.props.content })));
      } });
    var ProfileBio = React.createClass({ displayName: "ProfileBio",
      render: function () {
        return (
          React.createElement("div", { className: "ProfileBio" },
          React.createElement("h2", { className: "ProfileBio__name" }, this.props.content.name),
          React.createElement("h2", { className: "ProfileBio__birthday" }, "Born: ", this.props.content.dob),
          React.createElement("h2", { className: "ProfileBio__title" }, "Weapons: ", this.props.content.weapons),
          React.createElement("p", { className: "ProfileBio__biography" }, this.props.content.intro),
          React.createElement("button", { type: "submit" }, React.createElement("i", { className: "fa fa-close" }))));
      } });
    var ProfilePortrait = React.createClass({ displayName: "ProfilePortrait",
      render: function () {
        return (
          React.createElement("div", { className: "ProfilePortrait" },
          React.createElement("img", { className: "portrait", src: this.props.source })));
      } });
    var Avatar = React.createClass({ displayName: "Avatar",
      render: function () {
        return (
          React.createElement("div", { className: "Avatar" },
          React.createElement(AvatarImage, null),
          React.createElement(AvatarName, null),
          React.createElement(ACVersion, null)));
      } });
    var AvatarImage = React.createClass({ displayName: "AvatarImage",
      render: function () {
        return (
          React.createElement("div", { className: "AvatarImage" },
          React.createElement("img", { className: "Avatar__image", src: "https://cdn.rawgit.com/shelune/ui-components/master/avatars/avatar--ezio.jpg" })));
      } });
    var AvatarName = React.createClass({ displayName: "AvatarName",
      render: function () {
        return (
          React.createElement("div", { className: "AvatarName" }, "Ezio Auditore"));
      } });
    var ACVersion = React.createClass({ displayName: "ACVersion",
      render: function () {
        return (
          React.createElement("div", { className: "ACVersion" },
          React.createElement("span", null, "AC II")));
      } });
    var Character = React.createClass({ displayName: "Character",
      render: function () {
        return (
          React.createElement("div", { className: "Character" },
          React.createElement(Profile, { content: this.props.content })));
      } });
    var Container = React.createClass({ displayName: "Container",
      render: function () {
        return (
          React.createElement("div", null,
          React.createElement(Navigator, null)));
      } });
    var Navigator = React.createClass({ displayName: "Navigator",
      getInitialState: function () {
        return {
          character: characters[1],
          activeIndex: 1 };
      },
      handleClick: function (character, index) {
        this.setState({
          character: character,
          activeIndex: index });
      },
      render: function () {
        var className = this.state.clicked ? 'active' : 'inactive';
        return (
          React.createElement("div", { className: "Container" },
          React.createElement("ul", { className: "Navigator" },
          characters.map(function (char, index) {
            return (
              React.createElement("div", { index: index, className: this.state.activeIndex === index ? "is-active" : null, onClick: this.handleClick.bind(this, char, index) },
              React.createElement("span", null,
              char.name)));
          }, this)),
          React.createElement(Character, { content: this.state.character })));
      } });
    ReactDOM.render(React.createElement(Container, null), document.getElementById('app'));