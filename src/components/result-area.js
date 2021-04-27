import React from "react";

export const ResultArea = () => {
  const test = `d maritime borders with Singapore, Vietnam, and Indonesia. East
  Malaysia shares land and maritime borders with Brunei and Indonesia
  and a maritime border with the Philippines. The capital city is
  Kuala Lumpur, while Putrajaya is the seat of the federal government.
  By 2015, with a population of over 30 million, Malaysia became 43rd
  most populous country in the world. The southernmost point of
  continental Eurasia, Tanjung Piai, is in Malaysia, located in the
  tropics. It is one of 17 megadiverse countries on earth, with large
  numbers of endemic species. Malaysia has its origins in the Malay
  kingdoms present in the area which, from the 18th century, became
  subject to the British Empire. The first British territories were
  known as the Straits Settlements, whose establishment was followed
  by the Malay kingdoms becoming British protectorates. The
  territories on Peninsular Malaysia were first unified as the Malayan
  Union in 1946. Malaya was restructured as the Federation of Malaya
  in 1948, and achieved independence on 31 August 1957. Malaya united
  with North Borneo, Sarawak, and Singapore on 16 September 1963, with
  is being added to give the new country the name Malay`;

  const testList = test.toLowerCase().split(" ");

  return (
    <div
      style={{
        marginTop: 10,
        marginLeft: 9,
        height: 170,
        width: 600,
        background: "#f2e9e4",
        borderRadius: 5,
        overflowY: "auto",
      }}
    >
      <div
        style={{
          padding: 15,
          textAlign: "justify",
        }}
      >
        {testList.map((data) => {
          return <h7>{data} </h7>;
        })}
      </div>
    </div>
  );
};
