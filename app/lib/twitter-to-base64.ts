import axios from "axios";
import fs from "node:fs";

const members = [
  {
    username: "nftchance",
    avatar:
      "https://pbs.twimg.com/profile_images/1608255669693546498/NvSjpOof_400x400.jpg",
  },
  {
    username: "masonthechain",
    avatar:
      "https://pbs.twimg.com/profile_images/1654588196892622849/kNqPR373_400x400.jpg",
  },
  {
    username: "the_art_ghost",
    avatar:
      "https://pbs.twimg.com/profile_images/1546896851542200320/Cg_thxdW_400x400.jpg",
  },
  {
    username: "MegLister",
    avatar:
      "https://pbs.twimg.com/profile_images/1469356718597423105/-C4aOTnz_400x400.jpg",
  },
  {
    username: "SeanSemola",
    avatar:
      "https://pbs.twimg.com/profile_images/1539265807959588864/wf4r7fzN_400x400.jpg",
  },
  {
    username: "drakedanner",
    avatar:
      "https://pbs.twimg.com/profile_images/1690138421149245441/oHf56kaR_400x400.jpg",
  },
  {
    username: "LoganOP_gm",
    avatar:
      "https://pbs.twimg.com/profile_images/1623504889065209856/-kqKCieR_400x400.jpg",
  },
  {
    username: "ibcflan",
    avatar:
      "https://pbs.twimg.com/profile_images/1638585139994165249/IIGnmuqL_400x400.jpg",
  },
  {
    username: "jfo____",
    avatar:
      "https://pbs.twimg.com/profile_images/1611600477421961216/BbX-rTnO_400x400.jpg",
  },
  {
    username: "jenesisquoi",
    avatar:
      "https://pbs.twimg.com/profile_images/1534739338965270531/p8FVX8x3_400x400.jpg",
  },
  {
    username: "TheMaclunkster",
    avatar:
      "https://pbs.twimg.com/profile_images/1701105225715593216/F9_Pxnq7_400x400.jpg",
  },
  {
    username: "segwitnitwit",
    avatar:
      "https://pbs.twimg.com/profile_images/1707204992329764864/fKdO_TN4_400x400.jpg",
  },
  {
    username: "banterlytics",
    avatar:
      "https://pbs.twimg.com/profile_images/1645520132922564608/OVI6tv9V_400x400.jpg",
  },
  {
    username: "bg_alt",
    avatar:
      "https://pbs.twimg.com/profile_images/1430741853876359168/1Z6PHM-5_400x400.jpg",
  },
  {
    username: "RBhavinVaid",
    avatar:
      "https://pbs.twimg.com/profile_images/1684117142537490433/-XhrPASv_400x400.jpg",
  },
  {
    username: "charliemktplace",
    avatar:
      "https://pbs.twimg.com/profile_images/1583836387811463170/4nSKVoVr_400x400.jpg",
  },
  {
    username: "JonnyThe4th",
    avatar:
      "https://pbs.twimg.com/profile_images/1428770158978510849/d_w8uXQ3_400x400.jpg",
  },
  {
    username: "Weelecht",
    avatar:
      "https://pbs.twimg.com/profile_images/1668645612860895234/_JyXD4M__400x400.jpg",
  },
  {
    username: "Reka",
    avatar:
      "https://pbs.twimg.com/profile_images/1626246286386032641/UPzmuTLS_400x400.jpg",
  },
  {
    username: "ldf_gm",
    avatar:
      "https://pbs.twimg.com/profile_images/1601607772205883398/4wKux40Y_400x400.jpg",
  },
  {
    username: "tommylower",
    avatar:
      "https://media.discordapp.net/attachments/1019145621963296779/1157049900484268132/darkmodeldf.jpg?ex=65173231&is=6515e0b1&hm=14d6b08dc1eb06cfc9c367cc36f009d1d24059187ba408430666ebc18279c967&=&width=400&height=400",
  },
  {
    username: "0xelric_eth",
    avatar:
      "https://pbs.twimg.com/profile_images/1593772343117025290/j9jYcWoE_400x400.jpg",
  },
  {
    username: "0xElle",
    avatar:
      "https://pbs.twimg.com/profile_images/1610503094722498561/eMp_3PjH_400x400.jpg",
  },
  {
    username: "sui414",
    avatar:
      "https://pbs.twimg.com/profile_images/1680765158002679808/bIMGQi0l_400x400.png",
  },
  {
    username: "CharlesAshbyML",
    avatar:
      "https://pbs.twimg.com/profile_images/1621916169618726913/c8ULjvhd_400x400.jpg",
  },
  {
    username: "0xWatkins",
    avatar:
      "https://pbs.twimg.com/profile_images/1683539561211674646/5Z1uy3j2_400x400.jpg",
  },
  {
    username: "francisgowen",
    avatar:
      "https://pbs.twimg.com/profile_images/1392214651929305090/v8dDPdwn_400x400.jpg",
  },
  {
    username: "dr_ethereum",
    avatar:
      "https://pbs.twimg.com/profile_images/1586815628366688256/fP4mb48W_400x400.jpg",
  },
  {
    username: "y2kenlee",
    avatar:
      "https://pbs.twimg.com/profile_images/1701751972523593728/5qzm-MmZ_400x400.jpg",
  },
  {
    username: "Ruthless_Cutie",
    avatar:
      "https://pbs.twimg.com/profile_images/1647263704382070789/4Sn7IwOP_400x400.jpg",
  },
  {
    username: "Scott_eth",
    avatar:
      "https://pbs.twimg.com/profile_images/1690322646200668160/Pa2BBolS_400x400.png",
  },
  {
    username: "0xaustinb",
    avatar:
      "https://pbs.twimg.com/profile_images/1547773825122586625/SYagOU7F_400x400.png",
  },
  {
    username: "dfranco65",
    avatar:
      "https://pbs.twimg.com/profile_images/1618269017285738497/O6weUEi3_400x400.jpg",
  },
  {
    username: "rezajafery",
    avatar:
      "https://pbs.twimg.com/profile_images/1702452885424877568/oIxD5nH4_400x400.jpg",
  },
  {
    username: "JO3nft",
    avatar:
      "https://pbs.twimg.com/profile_images/1668328472757018624/_CsAexcI_400x400.jpg",
  },
  {
    username: "aaron_lamphere",
    avatar:
      "https://pbs.twimg.com/profile_images/1653228411815596034/qtdv_sUL_400x400.jpg",
  },
];

async function urlToBase64(url: string) {
  const response = await axios.get(url, {
    responseType: "arraybuffer",
  });

  const base64 = Buffer.from(response.data, "binary").toString("base64");

  return base64;
}

async function main() {
  const membersWithBase64 = [];

  for (const member of members) {
    const avatar = member.avatar;
    const username = member.username;

    const base64 = await urlToBase64(avatar);

    membersWithBase64.push({
      username,
      avatar: `data:image/png;base64,${base64}`,
    });

    fs.writeFileSync(
      "./app/lib/members.ts",
      `export const members = ${JSON.stringify(membersWithBase64, null, 2)}`
    );
  }
}

main();
