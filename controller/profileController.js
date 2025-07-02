const getProfile = (req, res) => {
  const profileData = {
        name: "Anggi Setiyawan",
        bio: "Mahasiswa Teknik Informatika yang fokus di web dan mobile development.",
        images: [
                {id : 1, url: "https://server-production-dcaf.up.railway.app//images/my_avatar.jpg"},
                {id : 2, url: "https://server-production-dcaf.up.railway.app//images/profile.jpg"},
                ],
        skills: ["JavaScript", "Node.js", "React", "Laravel"],
        email: "anggisetiyawan02733@email.com",
        location: "Purbalingga, Indonesia",
        socials: {
          github: "https://github.com/anggi02733",
          linkedin: "www.linkedin.com/in/anggisetiyawan-2808a3295",
          instagram: "https://www.instagram.com/anggi_setiyawann"
        },
        projects: [
          {
            name: "POS Coffee App",
            description: "A mobile POS app for coffee shops built with Flutter and Laravel.",
            url: "https://github.com/errie/pos-coffee"
          }
        ]
 };
  res.json(profileData);
};

module.exports = { getProfile };
