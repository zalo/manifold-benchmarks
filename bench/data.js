window.BENCHMARK_DATA = {
  "lastUpdate": 1768925386231,
  "repoUrl": "https://github.com/zalo/manifold-benchmarks",
  "entries": {
    "Manifold Performance": [
      {
        "commit": {
          "author": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "committer": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "id": "73b54669e47986c58fea7b0a8f2a3d63839ca167",
          "message": "Remove temporary push triggers\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-20T14:50:59Z",
          "url": "https://github.com/zalo/manifold-benchmarks/commit/73b54669e47986c58fea7b0a8f2a3d63839ca167"
        },
        "date": 1768921049432,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SphereCreation/16_mean",
            "value": 41767.24561088538,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 41766.08327348176 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_median",
            "value": 41742.92692123666,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 41740.69266219774 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_stddev",
            "value": 68.58663817994798,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 68.75420275981831 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_cv",
            "value": 0.0016421154226668214,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016461730995846555 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_mean",
            "value": 179851.86705993034,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 178849.66914593495 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_median",
            "value": 179533.0925878374,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 178478.55347525014 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_stddev",
            "value": 651.1355277877725,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 721.6466225490739 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_cv",
            "value": 0.003620399045236493,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00403493406498972 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_mean",
            "value": 901992.2797772004,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 901974.2943444732 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_median",
            "value": 902366.6683804105,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 902347.4601542419 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_stddev",
            "value": 1684.7044054541911,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1689.8763756196095 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_cv",
            "value": 0.0018677592294585128,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0018735305276607235 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_mean",
            "value": 3458136.7631134237,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3457775.291032146 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_median",
            "value": 3451178.8172589205,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3450456.324873092 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_stddev",
            "value": 21544.296766768883,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 21714.592835599033 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_cv",
            "value": 0.006230030285838713,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006279931750312561 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_mean",
            "value": 9929548.143518552,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9928444.597222216 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_median",
            "value": 9901669.361110995,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9900224.47222221 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_stddev",
            "value": 72886.61847016319,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 73150.92304289724 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_cv",
            "value": 0.0073403761597892496,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007367812986876456 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_mean",
            "value": 29035874.31944427,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 29031731.000000015 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_median",
            "value": 29018161.083333403,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 29016201.333333343 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_stddev",
            "value": 62783.493164377905,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 66482.55090058947 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_cv",
            "value": 0.0021622732098111504,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0022899961046273626 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_BigO",
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_mean",
            "value": 4334.574023862213,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4334.390374607422 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_median",
            "value": 4334.389060159176,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4334.276275551279 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_stddev",
            "value": 0.9477004791117848,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.78433243799642 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_cv",
            "value": 0.00021863751175885102,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00018095565240070454 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_mean",
            "value": 4326.933947639349,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4326.699049848388 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_median",
            "value": 4327.368980015981,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4327.179796015683 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_stddev",
            "value": 3.352205128570936,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.302068310480502 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_cv",
            "value": 0.0007747299055488939,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000763184190172924 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_mean",
            "value": 4364.5109396779535,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4364.385748929743 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_median",
            "value": 4339.200013610164,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4339.021677266092 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_stddev",
            "value": 47.2998760600182,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 47.364982714680174 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_cv",
            "value": 0.010837382862307213,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010852611441666276 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_mean",
            "value": 21375.09182428183,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 21374.556091112467 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_median",
            "value": 21376.404301402854,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 21376.132245271536 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_stddev",
            "value": 14.577191200576065,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.7623115470859 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_cv",
            "value": 0.00068197092767651,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006906488015076984 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_mean",
            "value": 43532.08118700798,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43530.952573514165 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_median",
            "value": 43506.80589772516,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43505.467649620434 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_stddev",
            "value": 82.13441920071244,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 82.48407410018565 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_cv",
            "value": 0.0018867560879498042,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0018948373335246514 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_mean",
            "value": 87905.03421162594,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 87899.98431618547 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_median",
            "value": 87822.06913425098,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 87816.25671267236 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_stddev",
            "value": 285.1664026473225,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 284.06411923280604 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_cv",
            "value": 0.0032440281174432165,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0032316742880294223 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_mean",
            "value": 178193.4428910402,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 178187.98779867837 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_median",
            "value": 178040.1893746975,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 178037.39883070684 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_stddev",
            "value": 406.83228735699504,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 401.8350909069613 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_cv",
            "value": 0.0022830934783933687,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002255118854369496 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_mean",
            "value": 442435.867765116,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 442424.69412758824 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_median",
            "value": 443009.2135614673,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 443003.76172369934 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_stddev",
            "value": 3481.0634160965965,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3481.59902497421 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_cv",
            "value": 0.007867950294537721,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007869359624782093 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_mean",
            "value": 148.55935729492816,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.55542140744288 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_median",
            "value": 149.8429127228347,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.83695016836114 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_stddev",
            "value": 2.259417093459788,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.259037674000806 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_cv",
            "value": 0.015208850755689996,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015206699645144178 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_mean",
            "value": 146.1952926273159,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.19038380532953 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_median",
            "value": 146.1662811972609,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.16412190688268 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_stddev",
            "value": 0.19396112667117082,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.19399549689664775 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_cv",
            "value": 0.001326726211121042,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013270058662338323 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_mean",
            "value": 150.2771856883393,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.27165672974843 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_median",
            "value": 150.21966714690123,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.21526307266967 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_stddev",
            "value": 0.12128816962085524,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.12195863684610085 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_cv",
            "value": 0.0008070963604042695,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008115877571339597 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_mean",
            "value": 146.30906674050223,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.3051785916395 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_median",
            "value": 146.3143702496406,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.30736957577835 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_stddev",
            "value": 0.1326546931783889,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.1323570323217779 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_cv",
            "value": 0.000906674453837293,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009046640289555774 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_mean",
            "value": 147.4144697223811,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.4088516124538 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_median",
            "value": 146.8362810665018,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.83166377526496 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_stddev",
            "value": 1.1172982430428018,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.120000358154666 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_cv",
            "value": 0.00757929832225397,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007597917939820943 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_mean",
            "value": 151.51197879904586,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.4971240073664 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_median",
            "value": 149.19382994262753,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.17333474573923 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_stddev",
            "value": 4.101225076260883,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.108868334799758 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_cv",
            "value": 0.027068652318906358,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.027121757998521262 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_mean",
            "value": 149.23136036354782,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.22554593253642 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_median",
            "value": 149.26905351022359,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.26031073402063 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_stddev",
            "value": 0.14913406911152818,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.14998015599220915 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_cv",
            "value": 0.000999348050893709,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001005056842345304 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_mean",
            "value": 151.69489310212595,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.69060664193313 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_median",
            "value": 149.08483657660065,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.0848451508643 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_stddev",
            "value": 4.530120863354445,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.526861645710527 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_cv",
            "value": 0.029863370946209902,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.029842728867161956 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_mean",
            "value": 150.40475356352923,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.39982452105306 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_median",
            "value": 149.3179649505951,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.31593827328658 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_stddev",
            "value": 2.1608085678798394,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.15649100404245 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_cv",
            "value": 0.01436662417034006,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01433838776680609 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_mean",
            "value": 149.8150502106889,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.8107055453036 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_median",
            "value": 149.72614445393523,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.71982984178476 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_stddev",
            "value": 0.36164083801204244,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3630577166190037 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_cv",
            "value": 0.002413915274222832,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002423443073026667 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_mean",
            "value": 147.4222746985548,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.41673359540627 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_median",
            "value": 147.38491439191532,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.3810538229174 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_stddev",
            "value": 0.29266598260419346,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2899966453760951 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_cv",
            "value": 0.001985222268497954,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00196718946555964 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_mean",
            "value": 147.43221702606985,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.42923633897348 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_median",
            "value": 147.4114019541634,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.40804812874148 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_stddev",
            "value": 0.07178374597167543,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07079471680029907 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_cv",
            "value": 0.00048689321384200716,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00048019455678062283 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_mean",
            "value": 150.55296049369983,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.5486531873863 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_median",
            "value": 151.19669602878358,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.19439416814114 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_stddev",
            "value": 1.466707374355688,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.4660348722959986 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_cv",
            "value": 0.009742135721184075,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009737947442620033 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_mean",
            "value": 147.96395453157555,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.849790418717 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_median",
            "value": 147.14194570367042,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.13490223142477 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_stddev",
            "value": 1.5596806128445895,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.3741773785078182 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_cv",
            "value": 0.010540949772410638,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009294415464615055 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_mean",
            "value": 147.46714671315473,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.4566059875643 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_median",
            "value": 147.4708082061629,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.46311624555028 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_stddev",
            "value": 0.038481875545731445,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03876885488039619 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_cv",
            "value": 0.00026095219446121347,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00026291704342948016 ns\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_mean",
            "value": 0.001267247283673897,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0012671918174173684 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_median",
            "value": 0.0012595835866944963,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0012595238003244875 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_stddev",
            "value": 0.0000219124012246768,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.000021917618950799912 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_cv",
            "value": 0.017291338089240327,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.017296212498806737 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_mean",
            "value": 0.009547977556962212,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00954764626676926 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_median",
            "value": 0.009545594675234614,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.009545166371896468 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_stddev",
            "value": 0.00007599811162925837,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00007606446896043796 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_cv",
            "value": 0.007959603086188857,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.007966829398066578 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_mean",
            "value": 0.020019279990088432,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.020016631056859326 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_median",
            "value": 0.02008194325490877,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.020079063605957393 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_stddev",
            "value": 0.0002054587282109381,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00020554918149576188 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_cv",
            "value": 0.010263042842333038,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.010268919925230074 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_mean",
            "value": 0.12163079478920087,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.12161734751893306 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_median",
            "value": 0.12248681264837047,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.12246136317395746 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_stddev",
            "value": 0.0021294559312476347,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0021295422943257026 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_cv",
            "value": 0.017507539393606764,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.017510185329392924 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_mean",
            "value": 0.24298197513118816,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.2429640163130298 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_median",
            "value": 0.24357893326488442,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.24354193976728922 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_stddev",
            "value": 0.003068807343498237,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.003067047802883624 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_cv",
            "value": 0.012629773635848338,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.012623465192195798 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_mean",
            "value": 45.26445242222255,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 45.259898733332996 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_median",
            "value": 45.23241706666946,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 45.23203693333358 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_stddev",
            "value": 0.11951711911387415,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.11614017709256465 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_cv",
            "value": 0.0026404189759997474,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.002566072402787542 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_mean",
            "value": 227.44918222221915,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 227.42394266666426 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_median",
            "value": 227.29422966665425,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 227.26632599999638 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_stddev",
            "value": 0.343192440636654,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.35833209378422204 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_cv",
            "value": 0.0015088752453783416,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0015756128821908172 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_mean",
            "value": 0.019799357184842825,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.019798200896383133 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_median",
            "value": 0.01960773406072795,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.019606850498705225 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_stddev",
            "value": 0.00034892705768017283,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0003491529669044818 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_cv",
            "value": 0.017623150813567325,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.017635590664617784 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_mean",
            "value": 0.11735107290428991,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.11733706509311016 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_median",
            "value": 0.11738876821192339,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.11737260502631959 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_stddev",
            "value": 0.00021452616323832315,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0002119222919989322 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_cv",
            "value": 0.001828071596868041,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0018060984551707174 ms\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_mean",
            "value": 399.47026992651473,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 399.44380450043815 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_median",
            "value": 399.4704845105395,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 399.4608493643107 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_stddev",
            "value": 0.16698978849269444,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.17171831300443052 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_cv",
            "value": 0.0004180280763407333,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004298935446481362 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_mean",
            "value": 399.1910811735816,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 399.164897794149 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_median",
            "value": 398.9687058054863,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 398.9430474161191 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_stddev",
            "value": 0.6217927087103337,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6260597184418532 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_cv",
            "value": 0.0015576317659260464,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015684237815037404 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_mean",
            "value": 399.54971518866006,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 399.5231577817897 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_median",
            "value": 399.6040798925326,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 399.5782311372174 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_stddev",
            "value": 0.18136870866681087,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.18259890602096576 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_cv",
            "value": 0.00045393276924542896,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004570421074832841 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_mean",
            "value": 399.5722993321734,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 399.54286658101006 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_median",
            "value": 399.38118252084786,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 399.36665289793683 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_stddev",
            "value": 0.3668053469116416,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.35965272458122727 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_cv",
            "value": 0.0009179949348958951,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000900160545122147 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_mean",
            "value": 399.6864818720823,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 399.65760303296287 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_median",
            "value": 399.64978842774735,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 399.6342581050357 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_stddev",
            "value": 0.9461172058338017,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.9466222704067769 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_cv",
            "value": 0.002367148374401619,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0023685831652468315 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_mean",
            "value": 82283.35184317565,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 82280.00851296607 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_median",
            "value": 82389.91143392875,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 82387.3821462075 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_stddev",
            "value": 270.66923545669374,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 269.281797477438 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_cv",
            "value": 0.003289477511472356,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003272748779978593 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_mean",
            "value": 383492.28122143267,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 383477.403547266 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_median",
            "value": 383269.1289083574,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 383266.41524959565 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_stddev",
            "value": 596.726049265816,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 602.9626810744631 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_cv",
            "value": 0.0015560314470091244,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015723551778981009 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_mean",
            "value": 1875958.2058823623,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1875855.3484848395 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_median",
            "value": 1876007.9518718664,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1875848.5374331593 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_stddev",
            "value": 1519.4357416768619,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1554.733114726884 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_cv",
            "value": 0.0008099518085810397,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000828812901795796 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_mean",
            "value": 8415261.301960455,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8413161.00000003 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_median",
            "value": 8403395.976470431,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8400622.729411947 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_stddev",
            "value": 159321.00101649752,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 157940.57975298222 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_cv",
            "value": 0.01893238906073914,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01877303664496396 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_mean",
            "value": 28090490.133333027,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 28086844.73333301 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_median",
            "value": 27947632.95999928,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27945635.159999255 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_stddev",
            "value": 248149.93341646774,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 249324.1716257917 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_cv",
            "value": 0.008833948152510358,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008876902122433776 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_mean",
            "value": 644.4957527237107,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 644.4715027681865 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_median",
            "value": 644.5282185144895,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 644.5111982347213 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_stddev",
            "value": 0.08278916088596258,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07133364453446382 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_cv",
            "value": 0.00012845571213787894,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000110685490713035 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_mean",
            "value": 2517.8170160906366,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2517.6542702596175 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_median",
            "value": 2508.0212782019357,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2507.809819104688 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_stddev",
            "value": 22.768679340836343,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 22.7724070500701 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_cv",
            "value": 0.009043023855716415,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009045089041444056 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_mean",
            "value": 10017.121938902388,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10016.630186000375 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_median",
            "value": 10001.716182608403,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10001.203704762347 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_stddev",
            "value": 26.7292534241182,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.95852676107332 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_cv",
            "value": 0.0026683565985468095,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002691376866318933 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_mean",
            "value": 40181.97675886758,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40178.565094303915 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_median",
            "value": 40183.466486859004,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40179.075060255236 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_stddev",
            "value": 3.3734571042565435,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.2676167552427113 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_cv",
            "value": 0.00008395448348648178,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00008132736317420054 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_mean",
            "value": 167629.9683880376,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 167622.56933719324 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_median",
            "value": 167619.49758688823,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 167609.58590733222 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_stddev",
            "value": 49.5656737983718,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 49.00618929968067 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_cv",
            "value": 0.0002956850393459175,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00029236032769011395 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_mean",
            "value": 674144.9934895375,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 674108.3906249834 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_median",
            "value": 673913.086914002,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 673868.9003906173 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_stddev",
            "value": 415.6475650649211,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 429.6884764624324 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_cv",
            "value": 0.0006165551462652401,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006374174872145666 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_mean",
            "value": 745.9620984556101,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 745.9203192329514 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_median",
            "value": 745.8242997384042,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 745.8073204714038 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_stddev",
            "value": 0.33332116931979555,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3081106243125506 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_cv",
            "value": 0.0004468339209322852,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00041306104200162884 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_mean",
            "value": 2913.3989378890547,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2913.1844602831393 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_median",
            "value": 2913.0490349046718,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2912.845276879734 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_stddev",
            "value": 0.628712439256933,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6036942058104272 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_cv",
            "value": 0.00021580032555118447,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0002072282802688549 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_mean",
            "value": 11631.907171383345,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11631.337969502381 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_median",
            "value": 11632.629538543915,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11632.253178019217 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_stddev",
            "value": 2.1589269382379412,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.0024889858435535 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_cv",
            "value": 0.00018560386585179286,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00017216325336725 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_mean",
            "value": 46904.42676093986,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 46901.83284418387 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_median",
            "value": 46731.763807363466,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 46730.56783618178 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_stddev",
            "value": 330.1653519593873,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 327.8911959275362 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_cv",
            "value": 0.007039108560950067,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00699101028773968 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_mean",
            "value": 193660.57165281646,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 193648.68836565208 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_median",
            "value": 193668.1869806105,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 193649.7412742474 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_stddev",
            "value": 63.868562659171516,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 62.0644551021394 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_cv",
            "value": 0.0003297964170717796,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00032050026068313885 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_mean",
            "value": 778176.7929236678,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 778110.9463686966 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_median",
            "value": 778262.4022346473,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 778168.5944134129 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_stddev",
            "value": 248.19520013431156,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 227.45668999539075 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_cv",
            "value": 0.00031894448972427436,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000292319098011524 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_mean",
            "value": 14.256954274174396,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.255990755250318 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_median",
            "value": 14.264003474796501,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.26263935033176 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_stddev",
            "value": 0.021397404630545517,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.021593965063273032 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_cv",
            "value": 0.001500839816068262,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001514729171335933 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_mean",
            "value": 14.240732186051304,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.240037662634968 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_median",
            "value": 14.245986431854922,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.245293359066869 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_stddev",
            "value": 0.019070928485900942,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01894975569713252 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_cv",
            "value": 0.0013391817384629128,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013307377512670193 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_mean",
            "value": 14.22671682128459,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.225916252950348 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_median",
            "value": 14.219939766569816,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.219283745579352 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_stddev",
            "value": 0.017239864119387303,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01719812135537561 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_cv",
            "value": 0.0012117949865702495,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012089289047943642 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_mean",
            "value": 14.2233606981822,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.222391471143085 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_median",
            "value": 14.233045468468148,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.231896204891164 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_stddev",
            "value": 0.022009361716037356,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02211389284526624 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_cv",
            "value": 0.0015474093769449464,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015548645873048022 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_mean",
            "value": 14.248103040241938,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.247144373419045 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_median",
            "value": 14.243065083974436,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.242132965870278 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_stddev",
            "value": 0.018757071332003477,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.018859458007903233 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_cv",
            "value": 0.001316460954768964,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001323736007272405 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_mean",
            "value": 14.257665413831065,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.257073626066154 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_median",
            "value": 14.259925474953327,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.259388895764587 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_stddev",
            "value": 0.006491188408810827,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0069647878416187955 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_cv",
            "value": 0.00045527708922905847,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000488514545431336 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "makeshifted@gmail.com",
            "name": "Johnathon Selstad",
            "username": "zalo"
          },
          "committer": {
            "email": "makeshifted@gmail.com",
            "name": "Johnathon Selstad",
            "username": "zalo"
          },
          "distinct": true,
          "id": "b8228aef7aa1a9b3948035f2373ce85a327b6639",
          "message": "Add temporary push triggers to register workflows\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-20T06:50:16-08:00",
          "tree_id": "1a5fab31c06626c9d6b50d24ddbd0a93675623f8",
          "url": "https://github.com/zalo/manifold-benchmarks/commit/b8228aef7aa1a9b3948035f2373ce85a327b6639"
        },
        "date": 1768921054794,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SphereCreation/16_mean",
            "value": 38496.402248800696,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 38488.56053574382 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_median",
            "value": 38497.2535413094,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 38476.66301052747 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_stddev",
            "value": 57.58731265671992,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 60.63089470982688 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_cv",
            "value": 0.0014959141450293313,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0015752965002034768 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_mean",
            "value": 137704.85747442726,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 137691.94756097562 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_median",
            "value": 137439.23859166194,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 137427.4653815892 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_stddev",
            "value": 518.7841384860262,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 523.4130949656867 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_cv",
            "value": 0.0037673626624417952,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0038013340956913845 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_mean",
            "value": 984024.5040787591,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 983950.102953587 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_median",
            "value": 981590.3445850825,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 981563.4078762315 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_stddev",
            "value": 4774.096156365167,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 4784.967879660334 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_cv",
            "value": 0.00485160291900928,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.004863018831236447 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_mean",
            "value": 3830695.4568306813,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3830487.291803277 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_median",
            "value": 3831852.437158767,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3831758.6065573753 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_stddev",
            "value": 12235.343788979386,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 12236.678761455705 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_cv",
            "value": 0.003194026757507441,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0031945488469940974 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_mean",
            "value": 10724868.200000161,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 10724067.256250005 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_median",
            "value": 10710205.328124722,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 10709095.578124994 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_stddev",
            "value": 43257.057004733986,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 43675.85249522542 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_cv",
            "value": 0.004033341594326851,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.004072694757650934 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_mean",
            "value": 39925660.855554834,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 39916038.733333305 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_median",
            "value": 40035157.05555414,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 40032804.05555545 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_stddev",
            "value": 338654.73581083,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 331534.1497771797 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_cv",
            "value": 0.008482132256646497,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.008305787856156186 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_mean",
            "value": 3493.288668661012,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3492.573359282839 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_median",
            "value": 3490.600877040256,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3489.6524691019995 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_stddev",
            "value": 6.386372951288665,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 6.082346028660337 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_cv",
            "value": 0.0018281835705654924,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.001741508453213787 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_mean",
            "value": 3494.0301987347966,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3493.205662200532 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_median",
            "value": 3494.4656372962318,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3494.2989888927596 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_stddev",
            "value": 2.1337617102295416,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 2.1167093575291664 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_cv",
            "value": 0.0006106878271979979,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0006059503969187296 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_mean",
            "value": 3493.5509812610717,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3491.328850223843 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_median",
            "value": 3491.6203532640297,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3491.0204518631945 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_stddev",
            "value": 7.428050121719257,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 4.475431182040657 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_cv",
            "value": 0.0021262177542455507,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0012818704207006217 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_mean",
            "value": 15316.851427949567,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 15315.930047888585 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_median",
            "value": 15275.790770570535,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 15274.971832825478 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_stddev",
            "value": 131.50805307296648,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 131.59845273448138 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_cv",
            "value": 0.008585841136579541,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00859225997526825 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_mean",
            "value": 29966.42718139498,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 29965.923509041975 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_median",
            "value": 29911.91902868538,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 29911.260271044484 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_stddev",
            "value": 91.44711787845941,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 91.4331533132311 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_cv",
            "value": 0.0030516523483064893,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0030512376261536502 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_mean",
            "value": 59686.72937265625,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 59684.71508694186 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_median",
            "value": 59662.377429255204,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 59661.386464370786 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_stddev",
            "value": 45.32226599695729,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 44.623633893461914 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_cv",
            "value": 0.0007593357262715148,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0007476559757126982 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_mean",
            "value": 119343.84874808618,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 119341.32563447463 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_median",
            "value": 119343.60347470765,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 119340.31374552923 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_stddev",
            "value": 53.09750353858834,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 53.75780406183196 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_cv",
            "value": 0.00044491194222056474,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00045045422259246896 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_mean",
            "value": 309234.62435784476,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 309226.81213463325 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_median",
            "value": 309549.7865367857,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 309541.40124003624 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_stddev",
            "value": 826.2997686240644,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 824.7268212614988 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_cv",
            "value": 0.002672080367261444,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.002667061163190544 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_mean",
            "value": 158.10396271534742,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 158.10128900800729 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_median",
            "value": 157.4669080174752,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 157.4653874490095 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_stddev",
            "value": 1.8602135731337222,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1.8602231434094194 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_cv",
            "value": 0.011765761851794168,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.011766021359352771 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_mean",
            "value": 156.7580509570435,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 156.75364235210355 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_median",
            "value": 156.63431125837116,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 156.6277519103758 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_stddev",
            "value": 0.41707559578470105,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.41731916557122145 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_cv",
            "value": 0.002660632696300827,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0026622613631766827 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_mean",
            "value": 160.59440688254466,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 160.5893156382954 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_median",
            "value": 159.67787990623228,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 159.6734018676397 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_stddev",
            "value": 2.1153325033883816,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 2.1169134068518707 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_cv",
            "value": 0.013171893993391009,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.013182155976179121 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_mean",
            "value": 157.66460809851625,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 157.66022598212993 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_median",
            "value": 156.88499789984118,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 156.87650364592596 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_stddev",
            "value": 1.6428428836388538,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1.6432957653416131 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_cv",
            "value": 0.01041985835281643,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.010423020486650027 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_mean",
            "value": 159.32838817657031,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 159.32344062730533 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_median",
            "value": 157.38471719211037,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 157.37865287607949 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_stddev",
            "value": 3.4821255254309946,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3.4823136987612484 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_cv",
            "value": 0.021855022606342107,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.021856882358617855 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_mean",
            "value": 156.66154343471925,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 156.6578191566502 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_median",
            "value": 156.48620142225053,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 156.48158805314455 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_stddev",
            "value": 0.7974495467285034,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.7977767160941349 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_cv",
            "value": 0.0050902699491199655,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.005092479394829294 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_mean",
            "value": 156.84011858747687,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 156.83590490153392 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_median",
            "value": 156.84768430731722,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 156.8433946393721 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_stddev",
            "value": 0.34224377188430133,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.3434775583645647 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_cv",
            "value": 0.0021821188033176375,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0021900441648244366 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_mean",
            "value": 156.76399849186402,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 156.76037531347095 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_median",
            "value": 156.05777663292176,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 156.05185952061603 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_stddev",
            "value": 1.6735681483016371,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1.674387577410469 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_cv",
            "value": 0.010675717412174164,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.01068119143031028 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_mean",
            "value": 158.8241724822713,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 158.8170334938889 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_median",
            "value": 159.527155304024,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 159.52205354297016 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_stddev",
            "value": 1.5898063606238328,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1.5896303282849638 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_cv",
            "value": 0.010009851370711814,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.010009192926690266 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_mean",
            "value": 156.23738618455417,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 156.23284206534623 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_median",
            "value": 156.2092497811331,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 156.20822458050012 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_stddev",
            "value": 0.07802797685468384,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0784467214019876 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_cv",
            "value": 0.0004994193692059971,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0005021141545205734 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_mean",
            "value": 159.20959711390384,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 159.20485605382564 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_median",
            "value": 159.67930955330758,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 159.67544527014826 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_stddev",
            "value": 1.1413303601734384,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1.1403222648488238 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_cv",
            "value": 0.007168728398683734,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.007162609816771492 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_mean",
            "value": 157.5918117520112,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 157.58665608007794 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_median",
            "value": 157.5459321248747,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 157.53913376067007 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_stddev",
            "value": 0.6128757577754976,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.6126985823695905 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_cv",
            "value": 0.003889007626487142,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.003888010556288767 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_mean",
            "value": 158.47838591853957,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 158.47411177261446 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_median",
            "value": 159.35733724057337,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 159.35658605526123 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_stddev",
            "value": 2.2439483156925415,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 2.2430632479546206 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_cv",
            "value": 0.014159333480629763,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.014154130430925303 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_mean",
            "value": 158.82860626929107,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 158.8239347168804 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_median",
            "value": 159.5332607617901,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 159.52800635949953 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_stddev",
            "value": 3.0932205344428167,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3.093531515238248 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_cv",
            "value": 0.01947521046176226,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.019477741316211432 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_mean",
            "value": 158.8134799107336,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 158.8098179486383 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_median",
            "value": 159.4276058894342,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 159.4224379372426 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_stddev",
            "value": 1.5986030261562019,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1.597075986390617 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_cv",
            "value": 0.010065915229958753,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.01005653181283249 ns\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_mean",
            "value": 0.0018984533928132596,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0018983822287835471 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_median",
            "value": 0.0018970718946909454,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0018969104057682683 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_stddev",
            "value": 0.000019907372501639957,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.000019902562782357727 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_cv",
            "value": 0.010486100199773583,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.01048395970031334 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_mean",
            "value": 0.014093053859900475,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.01409214030656821 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_median",
            "value": 0.014076783198314477,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.014076425839885744 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_stddev",
            "value": 0.000195272839830006,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.00019532661631607202 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_cv",
            "value": 0.01385596349600448,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.013860677801017362 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_mean",
            "value": 0.029673282976926414,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.029669780635618103 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_median",
            "value": 0.029887563477307793,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.029879692629532377 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_stddev",
            "value": 0.00035688703897017264,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.00035597797715359214 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_cv",
            "value": 0.0120272178595029,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.011997998284026616 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_mean",
            "value": 0.17368491175442893,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.1736695290741192 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_median",
            "value": 0.17414935737458642,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.17412742650361807 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_stddev",
            "value": 0.0015670230996877737,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0015713572781914226 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_cv",
            "value": 0.00902221778425618,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.009047973392734852 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_mean",
            "value": 0.3516389081754804,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.35161918155533445 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_median",
            "value": 0.3516981096709967,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.3516815972083855 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_stddev",
            "value": 0.0008956642904140036,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.000905967247616944 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_cv",
            "value": 0.0025471137282880967,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0025765580922222004 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_mean",
            "value": 41.98527471764786,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 41.98357339999996 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_median",
            "value": 41.93034399999947,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 41.92703970588241 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_stddev",
            "value": 0.11609199325791904,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.11637653206795025 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_cv",
            "value": 0.0027650645146099656,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0027719539487305847 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_mean",
            "value": 212.03879460000888,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 212.02172526666536 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_median",
            "value": 212.13062033333094,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 212.10471366666184 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_stddev",
            "value": 0.3705047756078297,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.3692273203726203 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_cv",
            "value": 0.0017473442834211156,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0017414598428922004 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_mean",
            "value": 0.02945899966269065,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.029456186010035003 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_median",
            "value": 0.029475070540119892,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.029472158831218304 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_stddev",
            "value": 0.0002907039634594847,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.00028990404270777005 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_cv",
            "value": 0.009868086723516842,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.00984187303166156 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_mean",
            "value": 0.16855060807000605,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.16853461463295855 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_median",
            "value": 0.16883409431209223,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.16881622605736096 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_stddev",
            "value": 0.0010548181178699203,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.001053202817208182 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_cv",
            "value": 0.006258168569951469,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.006249178066487347 ms\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_mean",
            "value": 412.97293888210896,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 412.94039938276666 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_median",
            "value": 406.9174395687854,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 406.89568501578685 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_stddev",
            "value": 10.055040130310392,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 10.052554265367913 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_cv",
            "value": 0.024347939498236215,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.024343838191646403 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_mean",
            "value": 413.13982853493144,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 413.1084417213886 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_median",
            "value": 406.9983003815422,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 406.9739729249067 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_stddev",
            "value": 9.897318363414339,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 9.889647791431472 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_cv",
            "value": 0.02395634039572515,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.023939592592739402 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_mean",
            "value": 412.9643801989131,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 412.93723164225065 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_median",
            "value": 406.8077199153837,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 406.78554075843357 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_stddev",
            "value": 10.000914745022818,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 9.99901447701159 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_cv",
            "value": 0.024217378603466146,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.02421436894233423 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_mean",
            "value": 413.2805571191026,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 413.25227525267246 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_median",
            "value": 406.8740859443243,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 406.84132732775123 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_stddev",
            "value": 9.76546788325076,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 9.757332674513025 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_cv",
            "value": 0.023629149049071926,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.02361108034685872 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_mean",
            "value": 413.7721389112256,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 413.7437189074814 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_median",
            "value": 407.2734207891282,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 407.22000122505915 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_stddev",
            "value": 10.424292281278557,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 10.42266337626248 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_cv",
            "value": 0.02519331608142683,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.025191109616803938 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_mean",
            "value": 58350.08205256731,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 58347.528727578 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_median",
            "value": 58086.764288699414,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 58083.253483522436 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_stddev",
            "value": 572.3433176356527,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 573.0913928955509 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_cv",
            "value": 0.009808783424160937,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.009822033690086327 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_mean",
            "value": 264931.9629124008,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 264921.5978763766 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_median",
            "value": 265820.1444823601,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 265804.7645051219 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_stddev",
            "value": 2577.7684096617154,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 2575.441284010214 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_cv",
            "value": 0.009729926058465243,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.009721522535931637 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_mean",
            "value": 1453146.321829571,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1452985.8037421985 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_median",
            "value": 1452704.7484408966,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1452676.5280666014 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_stddev",
            "value": 5892.258636246734,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 5694.511428476623 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_cv",
            "value": 0.004054828166807138,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0039191789856516685 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_mean",
            "value": 6984100.156000297,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 6983912.6579998955 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_median",
            "value": 6988946.3300000895,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 6988711.399999944 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_stddev",
            "value": 24825.925598714653,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 24890.76567261629 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_cv",
            "value": 0.0035546348196890893,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0035640144560090603 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_mean",
            "value": 25258294.60714217,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 25256351.585713744 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_median",
            "value": 25221145.821425192,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 25220835.999998517 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_stddev",
            "value": 392951.5367162002,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 392835.18812227005 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_cv",
            "value": 0.015557326526909984,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.015553916676725284 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_mean",
            "value": 644.171729314727,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 644.1542602126071 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_median",
            "value": 644.1541586683462,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 644.1517681480425 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_stddev",
            "value": 0.21036495797654275,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.22180152160785988 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_cv",
            "value": 0.0003265665790709722,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00034432982176451477 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_mean",
            "value": 2505.74759210458,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 2505.6650833667327 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_median",
            "value": 2506.265477281619,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 2506.227983727682 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_stddev",
            "value": 1.3031884603836363,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1.3397742069384455 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_cv",
            "value": 0.000520079701758423,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0005346980391881664 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_mean",
            "value": 10014.492480847883,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 10013.904835684223 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_median",
            "value": 10015.304632347677,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 10014.541104030992 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_stddev",
            "value": 1.740928662145438,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1.768200575755312 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_cv",
            "value": 0.00017384092758318604,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00017657453358797527 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_mean",
            "value": 40337.641506381624,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 40335.673205106024 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_median",
            "value": 40341.39565644336,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 40339.168601630096 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_stddev",
            "value": 11.44379708446689,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 11.45094789220282 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_cv",
            "value": 0.00028370020301401165,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00028389132949325027 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_mean",
            "value": 168629.55293548707,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 168622.1689780084 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_median",
            "value": 168566.9695578537,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 168563.5916888044 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_stddev",
            "value": 152.1301850378852,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 149.99004341784402 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_cv",
            "value": 0.000902156130936823,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0008895037012446781 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_mean",
            "value": 670819.4938580168,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 670786.701151625 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_median",
            "value": 671183.374280258,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 671124.6880997705 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_stddev",
            "value": 682.6302861999543,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 678.2465055390237 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_cv",
            "value": 0.0010176065133021273,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0010111209783595762 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_mean",
            "value": 746.147065175983,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 746.1180383528048 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_median",
            "value": 746.127024833688,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 746.0852586781573 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_stddev",
            "value": 0.28562568181995485,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.2971314629087234 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_cv",
            "value": 0.00038280078439039143,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00039823653582306723 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_mean",
            "value": 2918.816631391095,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 2918.6768565429543 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_median",
            "value": 2918.545830277801,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 2918.3984067729375 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_stddev",
            "value": 2.684810310471166,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 2.6283083056528445 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_cv",
            "value": 0.0009198283583822109,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0009005136350606354 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_mean",
            "value": 11633.625454485296,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 11633.202484905838 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_median",
            "value": 11634.063386724478,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 11633.542620960061 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_stddev",
            "value": 2.7749691683186013,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 2.7722480220191725 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_cv",
            "value": 0.00023853004200412203,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00023830480262130603 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_mean",
            "value": 46951.17339941109,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 46948.633619073364 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_median",
            "value": 46929.989284755684,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 46926.12831502941 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_stddev",
            "value": 46.02341301438561,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 46.97388203157565 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_cv",
            "value": 0.0009802398892753313,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.001000537788015454 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_mean",
            "value": 194480.73364875087,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 194466.8534929096 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_median",
            "value": 194672.56526580773,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 194665.8469245875 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_stddev",
            "value": 327.262325611572,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 328.22836553539383 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_cv",
            "value": 0.0016827493370250041,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0016878370768073402 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_mean",
            "value": 774345.8015435643,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 774304.0123483907 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_median",
            "value": 773895.3825799684,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 773840.7398015496 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_stddev",
            "value": 820.1431034475243,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 827.5111806646752 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_cv",
            "value": 0.0010591432171681808,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.001068716121145895 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_mean",
            "value": 15.478100531325804,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 15.477349669469191 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_median",
            "value": 15.473403902589169,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 15.472100663333837 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_stddev",
            "value": 0.01710622073497715,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.01711546244135735 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_cv",
            "value": 0.0011051886308889277,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0011058393592489237 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_mean",
            "value": 15.457680323977087,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 15.456882442614889 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_median",
            "value": 15.464017577277179,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 15.462566945240175 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_stddev",
            "value": 0.02816670860549426,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.028456860924202167 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_cv",
            "value": 0.0018221821136903476,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0018410478975854868 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_mean",
            "value": 15.49009456267954,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 15.48925025382178 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_median",
            "value": 15.498948412965593,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 15.498556145770511 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_stddev",
            "value": 0.03605701632073598,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.03604164335636756 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_cv",
            "value": 0.00232774668836487,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0023268810798298474 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_mean",
            "value": 15.51353280010439,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 15.512528244159682 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_median",
            "value": 15.53144718164683,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 15.53049001844544 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_stddev",
            "value": 0.03990413768538732,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.04008540892563152 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_cv",
            "value": 0.002572214736614913,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.002584066781037017 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_mean",
            "value": 15.462878996496709,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 15.4622163920267 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_median",
            "value": 15.466157917555018,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 15.46609568601364 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_stddev",
            "value": 0.014480667838801763,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.014418832845322634 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_cv",
            "value": 0.0009364794125390573,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0009325204407796219 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_mean",
            "value": 15.505888211189255,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 15.505186463514388 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_median",
            "value": 15.502143773767173,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 15.500973980803797 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_stddev",
            "value": 0.037066658453918176,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.037093505772058645 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_cv",
            "value": 0.0023904892095875157,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0023923289061595116 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "committer": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "id": "73b54669e47986c58fea7b0a8f2a3d63839ca167",
          "message": "Remove temporary push triggers\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-20T14:50:59Z",
          "url": "https://github.com/zalo/manifold-benchmarks/commit/73b54669e47986c58fea7b0a8f2a3d63839ca167"
        },
        "date": 1768921114578,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SphereCreation/16_mean",
            "value": 38824.67038875601,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 38819.263851860116 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_median",
            "value": 38846.14222767648,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 38845.2243292989 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_stddev",
            "value": 62.310023579691084,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 66.401610669887 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_cv",
            "value": 0.0016049079864883195,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0017105324542805625 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_mean",
            "value": 138560.2132149905,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 138548.20291913213 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_median",
            "value": 137959.74674556317,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 137935.39763313602 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_stddev",
            "value": 1532.2622040140723,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1537.3709450516192 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_cv",
            "value": 0.011058457319465935,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.011096289325015296 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_mean",
            "value": 952407.9000000082,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 952346.952162162 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_median",
            "value": 951173.7243243288,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 951122.2027027027 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_stddev",
            "value": 6769.953646800536,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 6743.91833119853 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_cv",
            "value": 0.007108250201201059,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.007081367054189091 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_mean",
            "value": 3657970.410416623,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3657804.49375 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_median",
            "value": 3665156.5520834005,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3665001.510416664 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_stddev",
            "value": 14300.457674442305,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 14276.227911395656 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_cv",
            "value": 0.003909396761034368,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0039029499624129976 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_mean",
            "value": 11268636.003333371,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 11266256.833333338 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_median",
            "value": 11252040.483333303,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 11251379.050000014 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_stddev",
            "value": 54334.589824870345,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 51583.56770079312 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_cv",
            "value": 0.004821753920243556,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.004578589718296981 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_mean",
            "value": 39201560.6555554,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 39196661.91111112 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_median",
            "value": 39084465.27777837,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 39083336.944444455 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_stddev",
            "value": 1737923.6820549336,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1734664.8459179867 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_cv",
            "value": 0.04433302279277103,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.04425542281768285 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_mean",
            "value": 3466.8428325535015,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3466.049906518018 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_median",
            "value": 3466.870109507557,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3465.942224178699 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_stddev",
            "value": 3.044832272745533,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 2.877023342902822 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_cv",
            "value": 0.0008782723705137977,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0008300582566605541 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_mean",
            "value": 3468.0763212065867,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3467.147485253944 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_median",
            "value": 3467.0514082973036,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3466.1213580222407 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_stddev",
            "value": 3.54286973076436,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3.539092308984954 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_cv",
            "value": 0.0010215662524784785,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0010207504365006097 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_mean",
            "value": 3467.554016288791,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3467.093001553684 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_median",
            "value": 3467.1318789521256,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3466.084145629445 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_stddev",
            "value": 3.015888913765431,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3.25187648879425 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_cv",
            "value": 0.000869745330454358,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0009379259475696238 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_mean",
            "value": 15197.499926048145,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 15195.364968679298 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_median",
            "value": 15201.384635461669,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 15200.654341395511 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_stddev",
            "value": 8.290539244039426,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 9.827116787401822 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_cv",
            "value": 0.0005455199397520407,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0006467180490667704 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_mean",
            "value": 30300.336911357725,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 30297.469416551274 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_median",
            "value": 30221.75783414156,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 30221.420446675802 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_stddev",
            "value": 133.44754410439342,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 133.895589790777 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_cv",
            "value": 0.00440416040570071,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.004419365457553061 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_mean",
            "value": 59787.595814904125,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 59784.87034705684 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_median",
            "value": 59578.200068050144,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 59577.39384144283 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_stddev",
            "value": 413.0810168732848,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 413.07300144713906 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_cv",
            "value": 0.006909142460789669,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.006909323363071812 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_mean",
            "value": 119845.66166439277,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 119842.82701227849 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_median",
            "value": 119519.09464529328,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 119516.51909959146 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_stddev",
            "value": 836.2398482985698,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 836.739383646113 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_cv",
            "value": 0.0069776397133199195,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.006981973010035759 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_mean",
            "value": 311874.6155080187,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 311862.9022281639 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_median",
            "value": 311309.3948306594,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 311300.71836007206 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_stddev",
            "value": 1155.302177996642,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1155.1018655452758 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_cv",
            "value": 0.0037043802879395864,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0037038771116809036 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_mean",
            "value": 159.43620657504937,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 159.43076298346998 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_median",
            "value": 160.08359783764402,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 160.0781850038545 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_stddev",
            "value": 1.634053065626933,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1.6355380640377457 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_cv",
            "value": 0.010248945962332313,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.010258610279669305 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_mean",
            "value": 160.24283583126504,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 160.23750114262512 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_median",
            "value": 160.04687437155923,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 160.04257741514317 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_stddev",
            "value": 1.8460386459451068,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1.8485607310633483 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_cv",
            "value": 0.011520256967300411,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.011536380172441473 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_mean",
            "value": 160.14612841770017,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 160.14052013481862 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_median",
            "value": 157.52034063297316,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 157.5144773940028 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_stddev",
            "value": 5.3458215759113905,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 5.346122279794043 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_cv",
            "value": 0.033380897988168554,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0333839447710877 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_mean",
            "value": 158.80528440135734,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 158.79509291243792 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_median",
            "value": 157.78508197914988,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 157.7689431083176 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_stddev",
            "value": 1.8549114057945424,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1.857891185944851 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_cv",
            "value": 0.011680413613356358,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.011699928202248171 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_mean",
            "value": 157.0963768305772,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 157.08895331395092 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_median",
            "value": 156.7500907187578,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 156.74868363834304 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_stddev",
            "value": 1.299980386887408,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1.2996301980716578 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_cv",
            "value": 0.008275050087815773,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.008273211900993924 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_mean",
            "value": 156.1158987691927,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 156.10592819696186 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_median",
            "value": 156.23771472632708,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 156.2247070141816 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_stddev",
            "value": 0.8009419738221375,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.7966756456284045 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_cv",
            "value": 0.005130431814675573,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.005103429798151058 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_mean",
            "value": 156.45473603890505,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 156.45189610181566 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_median",
            "value": 156.58066880674335,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 156.58024880037783 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_stddev",
            "value": 0.3276707546096759,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.32763565506712905 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_cv",
            "value": 0.002094348582251899,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.002094162251980063 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_mean",
            "value": 156.53831823838954,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 156.53479286588728 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_median",
            "value": 155.571107223312,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 155.5672834102203 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_stddev",
            "value": 2.0048435211172926,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 2.0056747430833477 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_cv",
            "value": 0.01280736591320823,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.012812964494109172 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_mean",
            "value": 159.8861326589741,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 159.87596733251573 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_median",
            "value": 159.2943236990337,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 159.28918521087465 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_stddev",
            "value": 1.8420370804465687,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1.840649730971808 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_cv",
            "value": 0.011520930863813589,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.01151298573314374 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_mean",
            "value": 158.93299162418393,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 158.92771710483163 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_median",
            "value": 158.87244209677553,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 158.85968596550597 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_stddev",
            "value": 0.23356253132463228,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.23356676294586945 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_cv",
            "value": 0.0014695660664144474,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0014696414646905456 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_mean",
            "value": 159.7343603196329,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 159.72677560566984 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_median",
            "value": 159.22383072924055,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 159.21215898062678 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_stddev",
            "value": 2.5682463149341976,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 2.571858160090026 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_cv",
            "value": 0.01607823332309382,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.01610160945362959 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_mean",
            "value": 158.54603558202157,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 158.53308336959336 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_median",
            "value": 159.0833146363863,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 159.06301429839448 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_stddev",
            "value": 1.8971652479425631,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1.8967314297800464 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_cv",
            "value": 0.011966021357633326,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.011964262534137021 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_mean",
            "value": 160.7404755783802,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 160.72817672223943 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_median",
            "value": 159.49918227504054,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 159.49074862691506 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_stddev",
            "value": 6.916155552075847,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 6.9192310238139525 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_cv",
            "value": 0.04302684515017124,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.04304927216197657 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_mean",
            "value": 159.36973509237154,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 159.35801751417642 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_median",
            "value": 159.17930469178415,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 159.16278832083577 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_stddev",
            "value": 0.5304823140864479,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.532035233780302 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_cv",
            "value": 0.003328626440766671,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0033386160425406416 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_mean",
            "value": 162.12050641978985,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 162.11580402823157 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_median",
            "value": 161.79005073470145,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 161.7874828641969 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_stddev",
            "value": 3.055371996611077,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3.0528185776438788 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_cv",
            "value": 0.018846301828712466,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.018831097905249557 ns\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_mean",
            "value": 0.001962690820267808,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0019625881472310042 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_median",
            "value": 0.001961652758226208,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0019615791184980974 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_stddev",
            "value": 0.000035707314824193925,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.000035743943973453285 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_cv",
            "value": 0.01819304113284724,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.018212656600359096 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_mean",
            "value": 0.013988521919853492,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.013987721410228193 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_median",
            "value": 0.013889007962893113,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.013888605796985923 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_stddev",
            "value": 0.00023508391844192077,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.00023488631093126624 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_cv",
            "value": 0.016805486654617396,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.01679232121105237 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_mean",
            "value": 0.03001719203483173,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.030014565185469577 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_median",
            "value": 0.030287563793912935,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.030283055576898123 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_stddev",
            "value": 0.0005403586422657836,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0005395112947453789 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_cv",
            "value": 0.018001638582274965,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.01797498285954057 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_mean",
            "value": 0.175660289681334,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.17564854643399186 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_median",
            "value": 0.1753381595852233,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.17531290692968962 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_stddev",
            "value": 0.0012590329412391647,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0012594689184969908 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_cv",
            "value": 0.007167430632860627,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.007170391922202983 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_mean",
            "value": 0.3494775781437106,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.34945353852295113 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_median",
            "value": 0.3514396801397018,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.3514228922155669 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_stddev",
            "value": 0.005371395367379822,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.005371283418752392 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_cv",
            "value": 0.015369785369094611,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.01537052233454383 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_mean",
            "value": 41.926966600001116,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 41.92208121176477 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_median",
            "value": 41.96504670588464,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 41.95973976470501 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_stddev",
            "value": 0.14708948709137817,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.14801173673658313 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_cv",
            "value": 0.003508231074636682,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0035306390441094313 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_mean",
            "value": 210.68930900000478,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 210.68153073333445 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_median",
            "value": 210.57256466667695,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 210.56881966667146 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_stddev",
            "value": 0.38222902852910134,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.3798473749331265 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_cv",
            "value": 0.0018141833125908287,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0018029457713306157 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_mean",
            "value": 0.029415491146456797,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.029410828547820473 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_median",
            "value": 0.029390174178888805,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.02938740822144123 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_stddev",
            "value": 0.0001928938541659298,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.000190208726976844 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_cv",
            "value": 0.0065575602054553685,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.006467302567405556 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_mean",
            "value": 0.16099507157267556,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.16098795754241052 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_median",
            "value": 0.16063245781751992,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.1606299284731776 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_stddev",
            "value": 0.001555339190951553,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0015583168026190282 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_cv",
            "value": 0.00966078759901324,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.009679710373420363 ms\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_mean",
            "value": 415.08274297070636,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 414.9594471178525 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_median",
            "value": 415.08721973482017,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 414.92381487732837 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_stddev",
            "value": 0.15517353106135592,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.21055507424944864 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_cv",
            "value": 0.0003738375870574484,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.000507411207798455 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_mean",
            "value": 415.160337043879,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 415.1439455140505 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_median",
            "value": 415.16569402867833,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 415.157502006566 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_stddev",
            "value": 0.3322200618061101,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.3286026276210271 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_cv",
            "value": 0.0008002211005310875,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0007915390099550557 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_mean",
            "value": 415.6777231671408,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 415.65840919611327 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_median",
            "value": 415.45517963753707,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 415.4404116173977 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_stddev",
            "value": 0.9300108003726686,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.928323703143714 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_cv",
            "value": 0.0022373361586151643,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.002233381263569525 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_mean",
            "value": 415.5801428978672,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 415.5627452308021 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_median",
            "value": 415.5035463141333,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 415.491668448428 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_stddev",
            "value": 0.5667527405934812,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.5692913129636251 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_cv",
            "value": 0.0013637628031057448,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0013699286557736128 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_mean",
            "value": 415.2170096731993,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 415.2016153733495 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_median",
            "value": 415.05304076927104,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 415.0366288139562 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_stddev",
            "value": 0.3248416325358077,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.323241613702128 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_cv",
            "value": 0.0007823418235959977,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0007785172353230584 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_mean",
            "value": 59665.026685942736,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 59660.752325879075 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_median",
            "value": 59388.31363211027,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 59384.18207330713 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_stddev",
            "value": 1267.7067179393252,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1267.3371584249642 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_cv",
            "value": 0.021247065296930486,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.021242393181743882 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_mean",
            "value": 268235.18255189137,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 268222.09431206825 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_median",
            "value": 268289.4711760124,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 268275.87202151987 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_stddev",
            "value": 629.2881883909824,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 625.7064184000676 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_cv",
            "value": 0.0023460315026692805,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.002332792233260535 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_mean",
            "value": 1451875.6720833182,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1451795.1325000431 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_median",
            "value": 1450965.7999999109,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1450907.4750000886 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_stddev",
            "value": 3562.7670531102463,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3550.0629313546974 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_cv",
            "value": 0.002453906434011652,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0024452919367771698 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_mean",
            "value": 6950658.336633621,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 6947631.180197944 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_median",
            "value": 6917860.831683045,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 6917409.673267478 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_stddev",
            "value": 58432.520594748145,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 56836.877316937935 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_cv",
            "value": 0.008406760592270527,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.008180756266817059 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_mean",
            "value": 25259974.311111193,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 25258649.540740795 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_median",
            "value": 25294823.11111106,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 25294308.851852275 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_stddev",
            "value": 74407.5210743935,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 74456.50640282835 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_cv",
            "value": 0.0029456689131177618,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.002947762756782945 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_mean",
            "value": 644.478305487939,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 644.4508231909642 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_median",
            "value": 644.5208665265058,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 644.505267573909 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_stddev",
            "value": 0.5459934361703341,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.5402710799778905 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_cv",
            "value": 0.0008471866803289193,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0008383433778589447 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_mean",
            "value": 2508.013350536689,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 2507.8817977528283 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_median",
            "value": 2508.472393957137,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 2508.361729656034 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_stddev",
            "value": 3.380389450805402,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 3.3637976445815383 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_cv",
            "value": 0.0013478355089625157,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0013412903461381823 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_mean",
            "value": 10038.676432157836,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 10038.329884172017 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_median",
            "value": 10003.545461029393,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 10003.245292707988 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_stddev",
            "value": 88.16850868163831,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 88.22007334119262 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_cv",
            "value": 0.008782881814897414,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.008788321798459127 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_mean",
            "value": 40430.157489317266,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 40428.67821919463 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_median",
            "value": 40420.520094699896,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 40420.392193094915 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_stddev",
            "value": 57.455018833608754,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 56.977131927813296 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_cv",
            "value": 0.0014210931245763737,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.001409324628890831 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_mean",
            "value": 168849.13333333627,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 168842.97193236536 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_median",
            "value": 168517.98381642892,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 168511.64806762215 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_stddev",
            "value": 923.7233417954428,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 921.953035723304 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_cv",
            "value": 0.005470702298316566,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.005460417008607366 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_mean",
            "value": 675513.891907501,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 675479.1169556888 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_median",
            "value": 675187.992292869,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 675139.8044316387 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_stddev",
            "value": 1506.2137811035461,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1513.4723200502879 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_cv",
            "value": 0.002229730282600604,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0022405908370214957 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_mean",
            "value": 746.4129831558513,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 746.3757758404041 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_median",
            "value": 746.2142141885834,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 746.1652296095092 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_stddev",
            "value": 0.8518417357306992,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.8500083513235609 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_cv",
            "value": 0.0011412472116027414,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0011388477209974676 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_mean",
            "value": 2918.771147325141,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 2918.6287093737697 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_median",
            "value": 2917.974680696837,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 2917.80531047185 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_stddev",
            "value": 1.9394460056977725,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1.9435487769729871 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_cv",
            "value": 0.0006644734745562856,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0006659116216909965 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_mean",
            "value": 11643.428573334324,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 11642.866167544784 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_median",
            "value": 11647.971453345202,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 11647.238144467594 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_stddev",
            "value": 16.638623528702094,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 16.61190377753045 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_cv",
            "value": 0.0014290140935641347,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0014267881755642927 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_mean",
            "value": 46971.565966612296,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 46969.20780829188 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_median",
            "value": 46966.50390414409,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 46964.22711362085 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_stddev",
            "value": 53.16274682137331,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 53.4963867344289 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_cv",
            "value": 0.0011318069927487994,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.001138967192139543 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_mean",
            "value": 195357.7784128752,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 195346.3386792489 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_median",
            "value": 194452.86653717366,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 194443.9705882402 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_stddev",
            "value": 1547.8211395956919,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 1549.3363473389172 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_cv",
            "value": 0.007923007479766065,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00793122798110318 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_mean",
            "value": 777640.2965745779,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 777592.7933701656 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_median",
            "value": 777345.8176795545,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 777315.0917127249 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_stddev",
            "value": 741.6701225824975,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 735.0363483804159 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_cv",
            "value": 0.000953744457237459,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0009452715542728916 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_mean",
            "value": 14.088391272288803,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 14.08779109685788 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_median",
            "value": 14.09164636608352,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 14.09102600270723 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_stddev",
            "value": 0.017322231964891563,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.017438232482496763 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_cv",
            "value": 0.0012295393867264017,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0012378258850236758 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_mean",
            "value": 14.073026608045783,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 14.072411548712589 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_median",
            "value": 14.075441912518636,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 14.074637990853835 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_stddev",
            "value": 0.006813091963080657,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0066369798236845705 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_cv",
            "value": 0.0004841241442111322,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00047163059442301153 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_mean",
            "value": 14.073731830723656,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 14.072789124968228 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_median",
            "value": 14.074375285444003,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 14.073392323523553 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_stddev",
            "value": 0.004897691876386928,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.004804491098846871 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_cv",
            "value": 0.0003480023589546464,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00034140290571985093 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_mean",
            "value": 14.084538487733544,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 14.083942092584971 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_median",
            "value": 14.081648382585048,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 14.081367336386483 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_stddev",
            "value": 0.009164831845151978,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.009290003880852198 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_cv",
            "value": 0.0006507016082304564,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0006596167337086167 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_mean",
            "value": 14.117511276223201,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 14.11704731829633 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_median",
            "value": 14.088069535213515,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 14.087420798256918 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_stddev",
            "value": 0.05913119187728625,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.05916363412826241 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_cv",
            "value": 0.00418849970935567,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.004190935455148873 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_mean",
            "value": 14.084589082653128,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 14.08398814209787 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_median",
            "value": 14.08405402605367,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 14.083190602239569 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_stddev",
            "value": 0.01795931766531659,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.017908413152132267 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_cv",
            "value": 0.001275104126923778,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0012715441799189652 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "committer": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "id": "73b54669e47986c58fea7b0a8f2a3d63839ca167",
          "message": "Remove temporary push triggers\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-20T14:50:59Z",
          "url": "https://github.com/zalo/manifold-benchmarks/commit/73b54669e47986c58fea7b0a8f2a3d63839ca167"
        },
        "date": 1768921406311,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SphereCreation/16_mean",
            "value": 45074.244957947,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 45069.78831960179 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_median",
            "value": 45057.890898557605,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 45050.60987384142 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_stddev",
            "value": 177.89835386683794,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 177.34021240483696 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_cv",
            "value": 0.003946784999567095,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00393479133177353 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_mean",
            "value": 192227.96171171157,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 191268.6945045046 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_median",
            "value": 189000.70513513513,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 188168.02891891883 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_stddev",
            "value": 5645.12923716153,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5441.925935769088 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_cv",
            "value": 0.029366847501757585,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02845173356709937 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_mean",
            "value": 1142368.1927512484,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1142302.2202086763 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_median",
            "value": 1142845.3228995206,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1142745.0790774294 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_stddev",
            "value": 1287.6141775046578,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1303.9219844014372 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_cv",
            "value": 0.0011271446331183321,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011414859932279882 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_mean",
            "value": 3714305.175532036,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3714149.50531915 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_median",
            "value": 3715964.2978724483,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3715551.6968085137 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_stddev",
            "value": 2928.1768378497927,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2783.9211589570664 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_cv",
            "value": 0.0007883511718797747,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007495447221416709 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_mean",
            "value": 10492266.348039407,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10491858.637254896 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_median",
            "value": 10493936.367647154,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10493504.058823511 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_stddev",
            "value": 9976.928755122168,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9638.549613915306 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_cv",
            "value": 0.0009508840534711039,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009186694128426754 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_mean",
            "value": 30398535.26086952,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30397333.739130426 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_median",
            "value": 30412830.869564638,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30413005.43478257 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_stddev",
            "value": 250669.54495017685,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 250315.5789923137 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_cv",
            "value": 0.008246106031064297,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0082347873382751 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_mean",
            "value": 4163.51426467556,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4163.074590339638 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_median",
            "value": 4164.655760253426,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4164.034672271712 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_stddev",
            "value": 3.258910615651917,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.8971383008455387 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_cv",
            "value": 0.0007827307434254379,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006959131377487954 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_mean",
            "value": 4166.646369331941,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4165.343669296736 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_median",
            "value": 4165.848058365261,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4165.412318724243 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_stddev",
            "value": 1.8007820578820892,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5353065854246842 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_cv",
            "value": 0.0004321897992439463,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00012851438630874452 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_mean",
            "value": 4169.486436614528,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4169.200496175398 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_median",
            "value": 4168.073502684559,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4167.775761692805 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_stddev",
            "value": 3.901243205186096,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.06566454843136 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_cv",
            "value": 0.0009356651627229572,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009751664742822953 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_mean",
            "value": 19199.202943058604,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19198.581253998742 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_median",
            "value": 19195.57142857125,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19195.005154921873 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_stddev",
            "value": 9.020719546623932,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8.442656813394574 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_cv",
            "value": 0.00046984864805991,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00043975420379753895 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_mean",
            "value": 38718.43809312743,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38717.621893578485 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_median",
            "value": 38670.984601748554,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38670.286695469076 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_stddev",
            "value": 82.5049071015291,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 82.48639265257025 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_cv",
            "value": 0.002130894508272373,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0021304612375030976 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_mean",
            "value": 78786.83312652698,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78784.00218086112 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_median",
            "value": 78791.65831922954,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78791.02402707298 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_stddev",
            "value": 20.83530320863675,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 21.350327494951156 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_cv",
            "value": 0.0002644515889498501,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00027099825984897426 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_mean",
            "value": 160510.5578963461,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 160505.66788794735 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_median",
            "value": 159920.53766888412,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 159917.70116785003 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_stddev",
            "value": 1240.156227124927,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1236.4964824885544 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_cv",
            "value": 0.007726321828161549,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007703755878277025 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_mean",
            "value": 466837.641555546,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 466833.8093333335 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_median",
            "value": 467268.3126666471,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 467256.78000000195 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_stddev",
            "value": 790.4171244640011,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 784.296699808088 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_cv",
            "value": 0.001693130660651653,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016800340595041958 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_mean",
            "value": 152.0422001716463,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.03636771540937 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_median",
            "value": 151.85691396362475,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.8461072258029 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_stddev",
            "value": 0.47715864648666867,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.4814166984683221 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_cv",
            "value": 0.003138330318477277,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0031664575108073236 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_mean",
            "value": 153.446021776561,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153.4427313844258 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_median",
            "value": 152.0024636137574,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.00148151252958 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_stddev",
            "value": 2.714049661171636,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.710415799141662 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_cv",
            "value": 0.017687325026410097,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.017664022105753286 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_mean",
            "value": 152.01560775523413,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.0097921596323 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_median",
            "value": 151.8061771671812,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.79921733026507 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_stddev",
            "value": 0.45995731821122776,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.4593858597965559 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_cv",
            "value": 0.003025724298993178,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003022080704604439 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_mean",
            "value": 152.29148963385492,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.28433451734767 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_median",
            "value": 152.77075020763655,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.76230249442543 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_stddev",
            "value": 1.2011544184611147,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.2057345302600349 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_cv",
            "value": 0.007887206444358624,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007917653080216745 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_mean",
            "value": 155.4354983110291,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 155.42888747758818 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_median",
            "value": 153.17657579917176,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153.16707901367036 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_stddev",
            "value": 4.623996939147292,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.62174961005785 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_cv",
            "value": 0.029748654518381604,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.029735460924046542 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_mean",
            "value": 149.63056301329502,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.6174571392534 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_median",
            "value": 149.32960114328077,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.32433941730818 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_stddev",
            "value": 0.6143162291843531,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6101788100225632 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_cv",
            "value": 0.004105553149123483,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004078259460422802 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_mean",
            "value": 149.54184948095687,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.5304382597844 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_median",
            "value": 149.51662487446248,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.50260686216507 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_stddev",
            "value": 0.20003125931270205,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.19765880638855612 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_cv",
            "value": 0.0013376272930085344,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013218633522972536 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_mean",
            "value": 150.866797993252,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.83117391776872 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_median",
            "value": 149.86019017157938,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.85906060792607 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_stddev",
            "value": 2.201075552842643,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.143720566777844 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_cv",
            "value": 0.01458952918813252,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014212715522233977 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_mean",
            "value": 150.2208480428384,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.21774967665593 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_median",
            "value": 150.18369242183547,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.1827167908478 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_stddev",
            "value": 0.0888542924332783,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.08838484515686477 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_cv",
            "value": 0.0005914910852316568,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005883781733324681 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_mean",
            "value": 151.132265147175,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.12181687345003 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_median",
            "value": 150.28431527608765,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.2644721301999 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_stddev",
            "value": 1.6148934002667552,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.6197593339040983 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_cv",
            "value": 0.01068529872621274,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010718236237594277 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_mean",
            "value": 150.13569476226942,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.1274750585027 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_median",
            "value": 149.63471837599394,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.6203668263553 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_stddev",
            "value": 1.316027821959031,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.3143181774162978 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_cv",
            "value": 0.008765589182791472,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008754681159488797 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_mean",
            "value": 156.1778450042738,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 156.1674393521574 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_median",
            "value": 156.0904587308368,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 156.07789745134252 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_stddev",
            "value": 1.6289232513705276,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.6268478718275403 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_cv",
            "value": 0.010429925264533855,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010417330773792097 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_mean",
            "value": 151.22584395872735,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.21608122097555 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_median",
            "value": 150.90477741205572,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.89438150891658 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_stddev",
            "value": 2.0438498330425245,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.0439067502391275 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_cv",
            "value": 0.013515215253818212,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0135164642129055 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_mean",
            "value": 152.2904036285098,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.28309255004123 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_median",
            "value": 152.10641755003107,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.09847254063257 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_stddev",
            "value": 1.6616383365548424,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.6556764237664965 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_cv",
            "value": 0.010910985176769025,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010872358815686847 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_mean",
            "value": 154.888084090307,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 154.88032115284184 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_median",
            "value": 153.08083235452014,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153.0650475039362 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_stddev",
            "value": 3.36915787342174,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.3733948982694173 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_cv",
            "value": 0.02175220833293647,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.021780655367704342 ns\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_mean",
            "value": 0.0019026228105788502,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0019025339697473448 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_median",
            "value": 0.0019104170667937582,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0019102366252916638 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_stddev",
            "value": 0.000028280439200009867,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.000028256010406723787 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_cv",
            "value": 0.014863923129044103,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.014851777080477654 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_mean",
            "value": 0.013847672202443213,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.013847190669398157 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_median",
            "value": 0.013861467332285287,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.01386113928280182 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_stddev",
            "value": 0.000043780807836252554,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.000043711122317348106 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_cv",
            "value": 0.0031616005344586437,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0031566780122374042 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_mean",
            "value": 0.029640736223579486,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029639446410032844 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_median",
            "value": 0.02964297608072781,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029641578838088004 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_stddev",
            "value": 0.00011512551618575845,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0001148764577825542 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_cv",
            "value": 0.0038840302520615198,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.003875796335510131 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_mean",
            "value": 0.1801620905631667,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.18015215406730842 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_median",
            "value": 0.17968747057331635,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.17967775672247577 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_stddev",
            "value": 0.0013581197317360308,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0013533210512460736 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_cv",
            "value": 0.007538321338804955,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.007512100303504813 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_mean",
            "value": 0.3563080404143191,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3562693457293277 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_median",
            "value": 0.3568931915435462,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3568291650534889 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_stddev",
            "value": 0.002336866320742462,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0023221325385310103 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_cv",
            "value": 0.0065585562369716004,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.006517912827378724 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_mean",
            "value": 48.378458533333436,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 48.36114177777707 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_median",
            "value": 48.30514686666447,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 48.29929066666523 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_stddev",
            "value": 0.13183300528768804,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.10724394914439256 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_cv",
            "value": 0.0027250352591712537,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00221756445778692 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_mean",
            "value": 242.1137495555538,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 242.09657055555388 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_median",
            "value": 241.9795030000008,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 241.97555766665837 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_stddev",
            "value": 0.3248501396934936,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3302818482217022 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_cv",
            "value": 0.0013417252852835424,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.001364256616538533 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_mean",
            "value": 0.029288810047031256,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029288152300883812 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_median",
            "value": 0.029323291338911737,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029322933533108577 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_stddev",
            "value": 0.0002747037531956564,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00027525485523974724 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_cv",
            "value": 0.009379136699461119,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00939816388592875 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_mean",
            "value": 0.1605376445404246,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.16053068750473515 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_median",
            "value": 0.1606267201636681,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.160620353716753 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_stddev",
            "value": 0.00037252935972072296,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0003749935707309038 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_cv",
            "value": 0.0023205109355327385,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.002335961905849576 ms\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_mean",
            "value": 407.7881232543862,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 407.7707374575568 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_median",
            "value": 407.55810311988995,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 407.5329045940526 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_stddev",
            "value": 0.7038550140964722,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.7028818008040755 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_cv",
            "value": 0.0017260311763846873,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017237180999954312 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_mean",
            "value": 407.36833359991857,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 407.3449201432743 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_median",
            "value": 407.3539141182757,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 407.3338591516524 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_stddev",
            "value": 0.028403044906970376,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0340567795670127 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_cv",
            "value": 0.00006972325181972871,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00008360673690255917 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_mean",
            "value": 407.4110972586502,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 407.3821087484287 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_median",
            "value": 407.45073004807733,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 407.4346111357506 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_stddev",
            "value": 0.32830688092677707,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3246923236607679 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_cv",
            "value": 0.0008058368638848028,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007970215595827151 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_mean",
            "value": 407.50759537674594,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 407.4816241698888 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_median",
            "value": 407.4349925450654,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 407.41789567289726 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_stddev",
            "value": 0.15269872478317412,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.15733816348082624 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_cv",
            "value": 0.0003747138127376551,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003861233345217752 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_mean",
            "value": 407.66728799266366,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 407.5637098195719 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_median",
            "value": 407.23742252131007,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 407.22800876191815 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_stddev",
            "value": 1.0355870713240198,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.9032817576595571 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_cv",
            "value": 0.0025402751258831835,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0022162958474871057 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_mean",
            "value": 69058.5690050427,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 69052.55292460856 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_median",
            "value": 69145.67390450077,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 69139.35684810308 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_stddev",
            "value": 238.66874644233374,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 237.8170638258389 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_cv",
            "value": 0.00345603376787182,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003444001036217836 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_mean",
            "value": 319650.48979282123,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 319371.3872638648 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_median",
            "value": 318805.6814442464,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 318795.17915904435 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_stddev",
            "value": 2710.2346733820655,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2283.8760597538408 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_cv",
            "value": 0.008478744002984888,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007151160532320641 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_mean",
            "value": 1707887.6056910476,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1707883.9682927139 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_median",
            "value": 1707726.5951219788,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1707735.5609756513 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_stddev",
            "value": 3723.5398276800292,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3721.4285815874478 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_cv",
            "value": 0.0021802019145009286,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002178970381288592 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_mean",
            "value": 7762299.124542285,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7761990.428571423 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_median",
            "value": 7749476.153846375,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7749302.373626348 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_stddev",
            "value": 33465.797767474396,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 33183.34308432854 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_cv",
            "value": 0.004311325450170378,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004275107446948483 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_mean",
            "value": 25720550.22222196,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25720477.185185373 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_median",
            "value": 25810441.88888915,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25810309.85185264 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_stddev",
            "value": 185016.72957487102,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 184848.69012805982 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_cv",
            "value": 0.00719334259867508,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007186829730924667 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_mean",
            "value": 644.3467151136534,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 644.3372531744782 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_median",
            "value": 644.3262069904198,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 644.3115469010792 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_stddev",
            "value": 0.20874516412673538,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2088576053687479 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_cv",
            "value": 0.00032396403866188065,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00032414330281193903 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_mean",
            "value": 2512.244345289311,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2512.1350819585628 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_median",
            "value": 2512.1314271138103,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2512.002812985017 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_stddev",
            "value": 0.6464733846032816,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.7643301040415174 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_cv",
            "value": 0.0002573290236737834,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00030425517701285974 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_mean",
            "value": 10088.44241604024,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10088.238580629199 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_median",
            "value": 10088.7834806647,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10088.59404244302 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_stddev",
            "value": 12.371281179964178,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.426709385856872 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_cv",
            "value": 0.001226282578596505,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012318016952650047 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_mean",
            "value": 40427.75803654045,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40427.09478106736 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_median",
            "value": 40441.279602220304,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40441.47617946343 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_stddev",
            "value": 26.13474136063633,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.260317021196453 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_cv",
            "value": 0.000646455371999965,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006743080888900007 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_mean",
            "value": 167723.73131942615,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 167717.2763525939 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_median",
            "value": 167710.74802204987,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 167702.83529129953 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_stddev",
            "value": 26.572351790643523,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 29.601329313098336 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_cv",
            "value": 0.00015842929072473985,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00017649540916027718 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_mean",
            "value": 674367.9457364449,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 674328.3175064636 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_median",
            "value": 674557.8275194335,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 674500.3963178372 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_stddev",
            "value": 659.4717673561411,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 689.1279890395843 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_cv",
            "value": 0.0009779109038700875,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010219472787200263 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_mean",
            "value": 746.4789886434237,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 746.4376364903998 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_median",
            "value": 746.8203470441207,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 746.78142118984 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_stddev",
            "value": 0.686119766435668,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6782404757190373 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_cv",
            "value": 0.0009191414318071477,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009086364922701222 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_mean",
            "value": 2923.6125577447783,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2923.5658735459674 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_median",
            "value": 2923.653723493085,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2923.5900818166624 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_stddev",
            "value": 2.709758236596093,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.7405168263240065 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_cv",
            "value": 0.0009268527149460433,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009373884307248593 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_mean",
            "value": 11698.488828729203,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11698.256039616457 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_median",
            "value": 11698.822212195468,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11698.570378169286 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_stddev",
            "value": 6.132933992581855,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.180452119691993 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_cv",
            "value": 0.000524250104639205,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005283225207895711 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_mean",
            "value": 46877.3226966997,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 46876.01908337194 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_median",
            "value": 46878.139103034286,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 46877.731916602825 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_stddev",
            "value": 17.39303824730671,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 18.119912026816476 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_cv",
            "value": 0.0003710330975990493,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003865497194757318 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_mean",
            "value": 193911.11055832508,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 193906.93007185674 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_median",
            "value": 193784.0154781777,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 193777.90243227629 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_stddev",
            "value": 244.1376777855469,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 246.97290023901166 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_cv",
            "value": 0.0012590185115365765,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012736672183273185 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_mean",
            "value": 778110.1421623944,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 778094.7456041704 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_median",
            "value": 777868.5364759364,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 777847.3355780292 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_stddev",
            "value": 720.7477870553663,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 707.4337083516506 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_cv",
            "value": 0.0009262799030640879,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009091871039462512 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_mean",
            "value": 14.34094569548762,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.340706664914405 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_median",
            "value": 14.345970073468777,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.345787258852935 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_stddev",
            "value": 0.010112054763829413,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010227332344806208 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_cv",
            "value": 0.0007051177083120238,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007131679479804249 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_mean",
            "value": 14.342900546200154,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.3426497755975 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_median",
            "value": 14.345127245514819,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.34465187161773 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_stddev",
            "value": 0.010628462901690562,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01058318003085165 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_cv",
            "value": 0.000741026047517728,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007378817858927163 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_mean",
            "value": 14.339187234514332,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.33898080083265 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_median",
            "value": 14.339241950969152,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.338944462319349 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_stddev",
            "value": 0.004268054154960575,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004026708731880872 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_cv",
            "value": 0.0002976496565082431,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0002808225206387783 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_mean",
            "value": 14.348784802783188,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.348275161069786 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_median",
            "value": 14.342345301303611,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.341568658552758 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_stddev",
            "value": 0.011505267501556428,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011659305593166226 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_cv",
            "value": 0.0008018287025480226,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008125928351862556 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_mean",
            "value": 14.33932376149293,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.338678306407553 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_median",
            "value": 14.340338163156884,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.339782080351718 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_stddev",
            "value": 0.003201274506067395,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003433634486641634 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_cv",
            "value": 0.00022325142798324655,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0002394665961023227 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_mean",
            "value": 14.338067907120914,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.337810539341083 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_median",
            "value": 14.338841294875508,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.338404874381629 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_stddev",
            "value": 0.007508794443051644,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007280683556457589 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_cv",
            "value": 0.0005236963928258735,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000507796049925499 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "committer": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "id": "73b54669e47986c58fea7b0a8f2a3d63839ca167",
          "message": "Remove temporary push triggers\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-20T14:50:59Z",
          "url": "https://github.com/zalo/manifold-benchmarks/commit/73b54669e47986c58fea7b0a8f2a3d63839ca167"
        },
        "date": 1768921794591,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SphereCreation/16_mean",
            "value": 44851.66181279422,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 44848.401032086644 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_median",
            "value": 44780.73835070513,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 44779.122394236656 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_stddev",
            "value": 124.9482069675624,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 127.17504985536131 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_cv",
            "value": 0.0027858099770992233,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0028356651949391536 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_mean",
            "value": 196176.49653537458,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 195036.65773158276 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_median",
            "value": 193092.93900437813,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 191795.8074398249 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_stddev",
            "value": 6425.151815799191,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6701.66554443402 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_cv",
            "value": 0.03275189397951454,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03436105613364806 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_mean",
            "value": 1130176.279380325,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1130106.3958333335 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_median",
            "value": 1131233.3958333198,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1131169.5272435895 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_stddev",
            "value": 3143.669372692582,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3178.797861159331 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_cv",
            "value": 0.002781574370341814,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0028128306085864643 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_mean",
            "value": 3729333.5815602653,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3729022.7535460982 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_median",
            "value": 3728574.696808549,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3728358.4946808494 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_stddev",
            "value": 1843.1357619152952,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1554.6417143492974 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_cv",
            "value": 0.0004942265746965362,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004169032524328036 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_mean",
            "value": 9606873.940639358,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9605341.858447492 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_median",
            "value": 9611093.000000035,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9610614.958904108 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_stddev",
            "value": 43206.90738151276,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43247.94741286384 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_cv",
            "value": 0.004497499149930269,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004502489140959527 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_mean",
            "value": 29718851.014492422,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 29714056.985507254 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_median",
            "value": 29791071.434782106,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 29782579.0434783 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_stddev",
            "value": 144218.72999297778,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 143260.46907867197 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_cv",
            "value": 0.004852769372633196,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004821302898777702 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_mean",
            "value": 4183.480915453681,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4183.030476020039 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_median",
            "value": 4177.890909090841,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4177.475912670007 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_stddev",
            "value": 10.07387621037101,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.85979757189781 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_cv",
            "value": 0.002408012947581127,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0023570943669717066 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_mean",
            "value": 4187.32415022345,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4186.989891800401 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_median",
            "value": 4187.559832766149,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4187.244696185808 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_stddev",
            "value": 1.196983757539913,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.3527517099656639 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_cv",
            "value": 0.0002858588718229607,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003230845416213752 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_mean",
            "value": 4181.951722847348,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4181.71877413858 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_median",
            "value": 4181.621730094051,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4181.526768436904 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_stddev",
            "value": 5.484564273784593,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.377502794245721 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_cv",
            "value": 0.0013114843588032485,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012859551501890438 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_mean",
            "value": 19048.961588080336,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19048.049105114947 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_median",
            "value": 19056.729217770888,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19056.027255382945 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_stddev",
            "value": 29.130617737315387,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 29.305172568067103 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_cv",
            "value": 0.00152924964453409,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001538486823839499 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_mean",
            "value": 38356.10910190162,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38353.52117914335 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_median",
            "value": 38347.93442893268,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38345.82065516097 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_stddev",
            "value": 37.629466652854624,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38.908413257982716 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_cv",
            "value": 0.0009810553659883358,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010144678262068183 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_mean",
            "value": 78594.21361581284,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78591.83675223272 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_median",
            "value": 78578.26017262613,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78576.19157045196 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_stddev",
            "value": 42.12245853324785,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43.04828078271617 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_cv",
            "value": 0.0005359485971722094,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005477449384269953 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_mean",
            "value": 159931.1348606334,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 159925.90576555958 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_median",
            "value": 159910.20664375852,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 159906.27147766371 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_stddev",
            "value": 53.755704935542575,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 51.10388522671692 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_cv",
            "value": 0.00033611782335182057,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003195472614776477 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_mean",
            "value": 466605.8024938768,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 466532.97951458505 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_median",
            "value": 467805.46092184796,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 467789.4208416823 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_stddev",
            "value": 3392.898288819702,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3336.7056084475157 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_cv",
            "value": 0.007271444698470561,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007152132335680251 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_mean",
            "value": 151.76225057828768,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.75891540463476 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_median",
            "value": 151.55189493999396,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.549063894808 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_stddev",
            "value": 2.28853237885392,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.287424565277396 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_cv",
            "value": 0.015079720880083835,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015072752458584963 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_mean",
            "value": 149.27196430275967,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.26650763332083 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_median",
            "value": 150.2370697564649,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.23178439673345 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_stddev",
            "value": 1.975525748996911,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.9757328569855968 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_cv",
            "value": 0.013234405792303146,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013236277101351253 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_mean",
            "value": 148.94070011107257,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.93453465488952 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_median",
            "value": 147.13267070445534,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.12570914082167 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_stddev",
            "value": 3.140190564485805,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.1419140705605244 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_cv",
            "value": 0.021083495392085618,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02109594042671805 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_mean",
            "value": 148.7451650225066,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.73954623760577 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_median",
            "value": 149.534186457235,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.53142142398045 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_stddev",
            "value": 2.3514479570825615,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.3507152058297804 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_cv",
            "value": 0.015808567335461054,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015804238114822552 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_mean",
            "value": 150.38847209782202,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.38257161866048 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_median",
            "value": 150.5736068833364,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.5650252291408 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_stddev",
            "value": 0.4475375061842735,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.44815138712352964 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_cv",
            "value": 0.0029758764082207538,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0029800752992836846 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_mean",
            "value": 146.34777296871252,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.340572094838 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_median",
            "value": 146.3794696886114,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.3687772438987 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_stddev",
            "value": 0.26343265934661136,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2657533014816722 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_cv",
            "value": 0.0018000455627222307,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0018159919540935451 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_mean",
            "value": 146.53614089059204,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.53182434423312 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_median",
            "value": 146.43690590338664,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.43188575674267 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_stddev",
            "value": 0.18203351799320958,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.18128377973926837 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_cv",
            "value": 0.0012422431550802263,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012371631933920091 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_mean",
            "value": 149.53097173013214,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.52566598409092 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_median",
            "value": 150.00932178851468,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.0024184288736 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_stddev",
            "value": 1.872349082297239,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.8726767672825755 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_cv",
            "value": 0.012521480069536257,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012524115876412967 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_mean",
            "value": 147.00760965779466,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.00322378560085 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_median",
            "value": 147.0386624031718,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.03517509685153 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_stddev",
            "value": 0.3396066300719834,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.34078659018766744 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_cv",
            "value": 0.0023101295971176055,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00231822528385291 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_mean",
            "value": 149.02181254308073,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.01490488461283 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_median",
            "value": 149.5807421138288,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.57410702385576 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_stddev",
            "value": 1.4502892027399856,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.4503649081727443 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_cv",
            "value": 0.00973205987761504,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00973301905132114 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_mean",
            "value": 147.88193547473318,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.878014093252 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_median",
            "value": 147.31297710402615,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.30760228924103 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_stddev",
            "value": 1.2344620803165236,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.2347971785064948 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_cv",
            "value": 0.00834761917575417,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00835010657992628 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_mean",
            "value": 148.44463146148306,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.43900800466952 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_median",
            "value": 149.6087457087792,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.60243943959884 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_stddev",
            "value": 2.294198615564143,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.294139057668937 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_cv",
            "value": 0.015454911322673322,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015455095587790301 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_mean",
            "value": 147.0368085294691,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.03121875154696 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_median",
            "value": 147.04401079593072,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.037354862356 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_stddev",
            "value": 0.19856252759359658,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.19655801443902396 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_cv",
            "value": 0.0013504273493109768,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001336845440771101 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_mean",
            "value": 150.2308533635676,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.225064403145 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_median",
            "value": 150.18924682134218,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.18574919429648 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_stddev",
            "value": 0.3124956896019893,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3117893794681025 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_cv",
            "value": 0.002080103271767559,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0020754817493796 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_mean",
            "value": 147.83133451941535,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.82496249391522 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_median",
            "value": 146.79836172417276,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.79264304846586 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_stddev",
            "value": 1.8982506086087543,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.8995293336131158 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_cv",
            "value": 0.012840651237978565,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012849855001257343 ns\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_mean",
            "value": 0.001913742450049733,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0019136787840159039 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_median",
            "value": 0.0019290989585028532,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0019290324111744075 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_stddev",
            "value": 0.00005585663782143824,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00005586280198848831 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_cv",
            "value": 0.029187123805497803,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029191315938225947 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_mean",
            "value": 0.014007686909502466,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.014007147243694854 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_median",
            "value": 0.013830064964472234,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.013829407862887305 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_stddev",
            "value": 0.00038216628052131833,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00038202027084939267 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_cv",
            "value": 0.02728261153967299,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.027273238740411928 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_mean",
            "value": 0.02931283506026597,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029309984619722566 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_median",
            "value": 0.02934862300697839,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.02934372027912883 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_stddev",
            "value": 0.00039105141315213626,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0003913877779582985 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_cv",
            "value": 0.013340620664911828,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.013353394177318515 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_mean",
            "value": 0.17782369660729325,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.17780860508905838 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_median",
            "value": 0.1771312562340995,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.17712999821882947 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_stddev",
            "value": 0.0014817096143688961,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0014853778886787853 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_cv",
            "value": 0.008332464360141558,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.008353802044253195 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_mean",
            "value": 0.3528812603207114,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.35285893619925135 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_median",
            "value": 0.3531240552712274,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.35310197441146923 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_stddev",
            "value": 0.0035293448011430423,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0035263289858103726 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_cv",
            "value": 0.010001508150179028,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.009993594108154131 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_mean",
            "value": 48.346571642857334,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 48.34195157142825 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_median",
            "value": 48.3439,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 48.33768214285783 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_stddev",
            "value": 0.01738405115260679,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.014015987134905877 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_cv",
            "value": 0.0003595715386196383,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00028993424301864144 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_mean",
            "value": 243.04643877777858,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 243.0199057777776 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_median",
            "value": 243.0033069999998,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 242.9917190000026 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_stddev",
            "value": 0.19983310894427173,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.19230904452674488 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_cv",
            "value": 0.0008222013453444692,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0007913304217251907 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_mean",
            "value": 0.02937266155981036,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029370716971967557 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_median",
            "value": 0.029677810158200466,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029677156536219728 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_stddev",
            "value": 0.0005863730757755023,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0005871209251718973 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_cv",
            "value": 0.01996322582417309,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.019990009972595018 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_mean",
            "value": 0.16134651704093197,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.16106488477464234 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_median",
            "value": 0.15993263784042552,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.15992820496893884 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_stddev",
            "value": 0.0026511572259377155,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0021764458519433166 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_cv",
            "value": 0.016431449990737288,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.013512851388982403 ms\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_mean",
            "value": 409.05500696568464,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 409.0274924478919 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_median",
            "value": 408.95868984513413,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 408.93717462773174 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_stddev",
            "value": 0.2438140511351403,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.23058002229123575 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_cv",
            "value": 0.0005960422118866613,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005637274426501062 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_mean",
            "value": 409.104519848288,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 409.08352194685966 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_median",
            "value": 409.2655228495493,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 409.23861846653114 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_stddev",
            "value": 0.5051625146217226,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.4959191032022958 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_cv",
            "value": 0.0012348006196779653,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001212268587212164 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_mean",
            "value": 408.91329750720087,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 408.8996109170552 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_median",
            "value": 408.78500870942685,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 408.78140469142426 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_stddev",
            "value": 0.34796193560074395,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.357904772348669 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_cv",
            "value": 0.0008509430672026908,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008752876324484194 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_mean",
            "value": 409.4286348906423,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 409.41597030954955 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_median",
            "value": 409.03815623961873,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 409.0208679173802 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_stddev",
            "value": 0.694758167924377,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6929770374221768 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_cv",
            "value": 0.0016968968672890843,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016925989401396174 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_mean",
            "value": 409.03551595191715,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 409.0259989335929 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_median",
            "value": 408.88062262418174,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 408.87927414630076 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_stddev",
            "value": 0.3532475229283057,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3391713595967154 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_cv",
            "value": 0.0008636108825567866,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008292171169583312 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_mean",
            "value": 68242.56412263474,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 68240.73783431094 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_median",
            "value": 68334.51741682952,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 68332.92103718074 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_stddev",
            "value": 758.3740198118371,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 759.513809260921 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_cv",
            "value": 0.011112918008898484,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011129917896037797 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_mean",
            "value": 313540.5343465979,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 313526.6338846641 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_median",
            "value": 313414.3169423277,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 313390.7684398677 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_stddev",
            "value": 511.37699760148735,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 521.6194596257528 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_cv",
            "value": 0.0016309757163206035,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016637165817869211 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_mean",
            "value": 1700538.1807229037,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1700234.4297188837 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_median",
            "value": 1685226.879518071,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1684460.1783132926 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_stddev",
            "value": 28364.93064922291,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 28578.259729009125 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_cv",
            "value": 0.01667997282905162,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0168084231382929 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_mean",
            "value": 7692859.604395754,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7692426.857142754 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_median",
            "value": 7689174.835164961,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7688495.043956104 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_stddev",
            "value": 11622.211628037478,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11401.312615162171 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_cv",
            "value": 0.0015107791154015688,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014821476793861947 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_mean",
            "value": 26781989.419753745,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26780045.703703675 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_median",
            "value": 26602565.666667875,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26600358.48148191 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_stddev",
            "value": 670738.9314082733,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 670467.1773312936 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_cv",
            "value": 0.025044402822202314,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.025036072930919907 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_mean",
            "value": 646.9721725431738,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 646.933451516106 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_median",
            "value": 647.0212276352094,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 646.9641830422727 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_stddev",
            "value": 0.4215115272472831,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.405043343095957 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_cv",
            "value": 0.0006515141533682497,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006260973862871477 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_mean",
            "value": 2520.040226452266,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2519.893888908905 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_median",
            "value": 2519.8275340937525,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2519.696959447321 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_stddev",
            "value": 0.7813888301534595,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.7746155513802478 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_cv",
            "value": 0.00031006998299130543,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003074000674352405 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_mean",
            "value": 10079.21667818334,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10078.413806672083 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_median",
            "value": 10074.184829551536,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10073.237072440132 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_stddev",
            "value": 10.360547188468063,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10.350573406988701 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_cv",
            "value": 0.0010279119418966029,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010270042097434463 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_mean",
            "value": 40647.04943208103,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40644.631413228555 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_median",
            "value": 40626.27474501575,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40624.42130273565 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_stddev",
            "value": 62.302845272139386,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 61.03930635611798 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_cv",
            "value": 0.001532776576470673,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015017802901332645 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_mean",
            "value": 169258.9727973027,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 169250.21673888646 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_median",
            "value": 167969.66201252324,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 167956.1104959059 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_stddev",
            "value": 2243.8026796863933,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2242.8071802793224 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_cv",
            "value": 0.013256624701211412,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013251428704162014 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_mean",
            "value": 674977.1915782868,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 674932.1796849897 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_median",
            "value": 673699.5998071687,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 673653.0106075195 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_stddev",
            "value": 2248.843888300426,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2236.870091109274 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_cv",
            "value": 0.0033317331553707687,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0033142146106491556 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_mean",
            "value": 749.4740605591396,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 749.4575781376857 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_median",
            "value": 748.9865623397606,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 748.9742490139585 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_stddev",
            "value": 3.1676107630214507,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.155840369513667 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_cv",
            "value": 0.004226444822731128,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004210832556200926 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_mean",
            "value": 2918.1304149471084,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2918.0747358333615 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_median",
            "value": 2917.7098554992976,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2917.700721459725 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_stddev",
            "value": 1.0002180416330284,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.9403063290206538 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_cv",
            "value": 0.00034275988369462837,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003222351770069095 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_mean",
            "value": 11644.791944063532,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11644.366554035383 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_median",
            "value": 11643.535980729734,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11642.970308788788 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_stddev",
            "value": 3.941821451650066,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.662043223635498 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_cv",
            "value": 0.00033850509915375434,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003144905484245863 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_mean",
            "value": 47196.51211613582,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 47193.45543271949 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_median",
            "value": 47039.04737018406,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 47036.43068676805 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_stddev",
            "value": 299.1470894533787,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 300.46470026168055 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_cv",
            "value": 0.006338330440971391,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0063666603241212694 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_mean",
            "value": 193392.76031307224,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 193329.38011049686 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_median",
            "value": 193437.13618783734,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 193416.10994474767 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_stddev",
            "value": 349.9362757269069,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 274.32541769224827 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_cv",
            "value": 0.0018094590260794435,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001418953588613683 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_mean",
            "value": 776442.1013363154,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 776408.7750556655 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_median",
            "value": 776361.5434298125,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 776314.1848552086 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_stddev",
            "value": 706.7164257296937,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 685.8307369403041 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_cv",
            "value": 0.0009101984868071703,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008833371787833448 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_mean",
            "value": 14.432855930187825,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.432107762103149 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_median",
            "value": 14.43985390331212,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.439135275939286 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_stddev",
            "value": 0.025809926346337733,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0256138592563662 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_cv",
            "value": 0.001788275755760409,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001774782982401565 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_mean",
            "value": 14.424649604287998,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.423940710512094 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_median",
            "value": 14.430206623188447,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.429603223904111 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_stddev",
            "value": 0.016351888915033058,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.016179906855580847 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_cv",
            "value": 0.0011336073571015653,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011217396951575802 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_mean",
            "value": 14.437205208749376,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.436408038862892 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_median",
            "value": 14.416543022351297,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.41650969163634 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_stddev",
            "value": 0.04592086522413431,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04547728631209052 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_cv",
            "value": 0.0031807309351192773,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00315018016875565 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_mean",
            "value": 14.426209896337575,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.425414937832032 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_median",
            "value": 14.429129361609355,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.428632453279313 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_stddev",
            "value": 0.014352378588514044,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014154039482531454 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_cv",
            "value": 0.000994882141022898,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009811876846198115 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_mean",
            "value": 14.422726763258114,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.422061522947109 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_median",
            "value": 14.425172136600557,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.425008569144842 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_stddev",
            "value": 0.00926453725528043,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009541697313888611 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_cv",
            "value": 0.0006423568446766828,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006616042580810452 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_mean",
            "value": 14.419839146925158,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.418965843992671 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_median",
            "value": 14.425364538294426,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.424918423409553 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_stddev",
            "value": 0.012255500327124622,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012131113546270202 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_cv",
            "value": 0.0008499054810703589,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008413303476493322 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "committer": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "id": "0dda8a011bf8df20b834c3de6ef1bef60c280405",
          "message": "Add tag name to benchmark commit messages for better identification\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-20T15:12:29Z",
          "url": "https://github.com/zalo/manifold-benchmarks/commit/0dda8a011bf8df20b834c3de6ef1bef60c280405"
        },
        "date": 1768922118406,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SphereCreation/16_mean",
            "value": 43464.956359441734,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43463.051525637 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_median",
            "value": 43322.20648002539,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43317.62535388487 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_stddev",
            "value": 334.7080309604101,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 334.79881095733515 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_cv",
            "value": 0.007700641137022624,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007703067299815607 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_mean",
            "value": 175845.1628853986,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 175039.1605584642 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_median",
            "value": 174618.81326352598,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 173773.73522812268 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_stddev",
            "value": 2258.944069276531,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2337.0287480193874 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_cv",
            "value": 0.012846211020025184,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013351462270288968 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_mean",
            "value": 1050217.492492466,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1050179.5355355358 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_median",
            "value": 1049602.9114114442,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1049543.172672673 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_stddev",
            "value": 1117.733379806214,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1114.3761176399728 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_cv",
            "value": 0.0010642875288179724,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001061129149761712 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_mean",
            "value": 3497126.794999966,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3496783.141666665 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_median",
            "value": 3497259.5749999867,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3496901.8700000024 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_stddev",
            "value": 2341.3205175743583,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2527.6447026871324 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_cv",
            "value": 0.0006694983209993622,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007228485726119081 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_mean",
            "value": 8877473.050632779,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8875977.738396624 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_median",
            "value": 8873552.126582252,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8873496.69620253 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_stddev",
            "value": 17240.49252132385,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 15952.006828836566 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_cv",
            "value": 0.0019420495475449473,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001797211225511497 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_mean",
            "value": 30528738.17391282,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30527113.028985485 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_median",
            "value": 30608287.478260178,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30606693.608695697 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_stddev",
            "value": 174237.29189355663,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 174440.57908655592 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_cv",
            "value": 0.0057073204565803014,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005714283526284475 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_mean",
            "value": 4298.205967663149,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4297.597568380331 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_median",
            "value": 4302.243818385294,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4301.382983175171 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_stddev",
            "value": 8.05863720092054,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7.757883696543847 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_cv",
            "value": 0.001874883907739271,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0018051675553855133 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_mean",
            "value": 4311.489946887971,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4310.8166191756945 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_median",
            "value": 4309.61399373457,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4309.067617717111 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_stddev",
            "value": 7.730904290966442,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8.298197252194813 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_cv",
            "value": 0.0017930934285366015,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0019249710635525891 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_mean",
            "value": 4313.113661740669,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4313.0676149425335 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_median",
            "value": 4314.675769704219,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4314.631834975371 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_stddev",
            "value": 10.80857614341469,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10.753016329711599 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_cv",
            "value": 0.0025059799001570042,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002493124914726121 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_mean",
            "value": 18878.59194409978,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 18878.369557006426 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_median",
            "value": 18883.39524092193,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 18883.254411050544 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_stddev",
            "value": 9.70244753493446,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.814473624237847 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_cv",
            "value": 0.0005139391520121719,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005198793039092378 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_mean",
            "value": 38029.81937833466,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38028.77704456942 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_median",
            "value": 37922.923355689556,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 37921.5686932063 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_stddev",
            "value": 220.73148587886953,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 221.3765812319356 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_cv",
            "value": 0.005804168662568479,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005821291096805034 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_mean",
            "value": 76376.45774571055,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 76375.03276119682 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_median",
            "value": 76439.38274843842,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 76438.78845523119 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_stddev",
            "value": 149.7638656073454,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.10970208257766 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_cv",
            "value": 0.0019608642509446102,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0019523356873548143 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_mean",
            "value": 153925.04979831344,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153920.5818115143 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_median",
            "value": 153910.28822881862,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153910.7102310233 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_stddev",
            "value": 35.08600666566199,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 28.807650593346466 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_cv",
            "value": 0.00022794214919296665,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00018715918465422182 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_mean",
            "value": 427257.8998771554,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 427240.5386977878 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_median",
            "value": 429122.0374693079,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 429120.3556511048 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_stddev",
            "value": 3977.482360208413,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4001.0197917845894 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_cv",
            "value": 0.00930932432461053,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009364794370823376 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_mean",
            "value": 253.24449493321603,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 253.2359276510122 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_median",
            "value": 252.68378907428698,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.66947680937167 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_stddev",
            "value": 0.9748446181485613,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.9824819504683107 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_cv",
            "value": 0.003849420767885363,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003879709958937114 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_mean",
            "value": 254.35184062774104,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 254.34126192805013 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_median",
            "value": 252.6531718807921,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.64178334591065 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_stddev",
            "value": 2.9838324032337558,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.98310858358855 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_cv",
            "value": 0.011731121724417835,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011728763791509507 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_mean",
            "value": 253.6736039603719,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 253.6534963364211 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_median",
            "value": 253.87296943185967,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 253.85414269067712 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_stddev",
            "value": 0.9454742354872687,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.9367876562361421 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_cv",
            "value": 0.003727128959128785,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003693178567480414 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_mean",
            "value": 253.84835228750953,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 253.8374302959222 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_median",
            "value": 252.31474405825895,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.30008706518308 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_stddev",
            "value": 2.768092801306613,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.766659843314795 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_cv",
            "value": 0.010904513566317978,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010899337580314456 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_mean",
            "value": 254.40509533636842,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 254.39410867060508 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_median",
            "value": 253.03687028829313,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 253.02154576929277 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_stddev",
            "value": 2.645292827552018,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.639210235207934 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_cv",
            "value": 0.010397955371351639,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01037449431906947 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_mean",
            "value": 251.9688168379101,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.96074571801697 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_median",
            "value": 252.31298954871804,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.31078607241398 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_stddev",
            "value": 0.8026890570100041,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.8065904054054597 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_cv",
            "value": 0.003185668238964541,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0032012542394526766 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_mean",
            "value": 250.97722227998113,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 250.96089159755445 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_median",
            "value": 251.13032167567727,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.10720200348973 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_stddev",
            "value": 0.4099333475472087,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.40210715047590034 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_cv",
            "value": 0.0016333488107932836,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016022701701296424 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_mean",
            "value": 251.44720596719299,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.437116815865 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_median",
            "value": 250.70519120549864,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 250.6987715643019 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_stddev",
            "value": 1.328882682031274,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.3268354399599096 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_cv",
            "value": 0.005284937157761288,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005277007057520434 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_mean",
            "value": 252.09823412863514,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.08514101051446 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_median",
            "value": 252.4147940408471,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.41100866857494 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_stddev",
            "value": 1.4571130273232924,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.4543514740287506 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_cv",
            "value": 0.005779941427831615,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005769286790164637 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_mean",
            "value": 252.76082758280222,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.7339499652514 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_median",
            "value": 252.3051053103757,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.291562961315 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_stddev",
            "value": 1.0281096891870571,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.0358592633615509 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_cv",
            "value": 0.004067519872517657,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0040986154155544675 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_mean",
            "value": 251.79463637432255,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.76753706038244 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_median",
            "value": 251.66114606570383,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.62087953344255 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_stddev",
            "value": 1.1144620984123759,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.110137367629912 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_cv",
            "value": 0.004426075608519302,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004409374538877357 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_mean",
            "value": 251.97219666368912,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.9622577293882 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_median",
            "value": 252.2002433164757,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.18749526360935 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_stddev",
            "value": 1.0116367893318425,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.0117020574498092 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_cv",
            "value": 0.00401487466762886,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00401529207813495 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_mean",
            "value": 252.2445346942817,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.2302717396193 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_median",
            "value": 252.4369969126625,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.4235303648061 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_stddev",
            "value": 0.342031098113468,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.34084642446987395 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_cv",
            "value": 0.001355950480861783,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013513303622086023 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_mean",
            "value": 252.29317099828612,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.28314289724597 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_median",
            "value": 252.86719309090532,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.85728061924135 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_stddev",
            "value": 1.335260358833551,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.3362229461770492 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_cv",
            "value": 0.005292495050698861,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005296520928159232 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_mean",
            "value": 252.17393942693408,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.15786969307388 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_median",
            "value": 250.4963175292852,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 250.48083861464718 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_stddev",
            "value": 2.972238530869085,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.970773726680878 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_cv",
            "value": 0.0117864619065059,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011781403968461895 ns\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_mean",
            "value": 0.004024051582651743,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.004023969893682687 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_median",
            "value": 0.004025360977010052,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00402522409833377 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_stddev",
            "value": 0.000003758173456923062,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0000037431713490296035 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_cv",
            "value": 0.0009339277540887101,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.000930218527456203 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_mean",
            "value": 0.019342683409226524,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.019340761078147462 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_median",
            "value": 0.01934087258175669,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.019338594038912763 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_stddev",
            "value": 0.00002511733619478605,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.000026295646740502293 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_cv",
            "value": 0.0012985445536892262,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0013595973102740486 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_mean",
            "value": 0.03876350831433123,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.03876280188346939 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_median",
            "value": 0.03869738618541849,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.03869739786441198 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_stddev",
            "value": 0.00013429111078565193,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0001330070027704469 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_cv",
            "value": 0.0034643693676199906,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00343130517681098 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_mean",
            "value": 0.20776453961180572,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.20775939730639714 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_median",
            "value": 0.20807872875817257,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.20807086333927402 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_stddev",
            "value": 0.0007389213128457221,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0007364787870290155 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_cv",
            "value": 0.003556532381446554,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0035448638982278112 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_mean",
            "value": 0.5269674504219239,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.5269361869725756 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_median",
            "value": 0.5304347539556976,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.5303872753164384 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_stddev",
            "value": 0.024581506526460465,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.024574160777431773 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_cv",
            "value": 0.046647106015331556,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.04663593312620743 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_mean",
            "value": 48.634050155556,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 48.61020562222254 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_median",
            "value": 48.65224866666722,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 48.645038600000134 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_stddev",
            "value": 0.09093670576682154,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.1255425594913522 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_cv",
            "value": 0.0018698156019488507,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0025826379025633956 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_mean",
            "value": 243.58438255555686,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 243.56521955555385 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_median",
            "value": 243.5168586666805,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 243.48282999999546 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_stddev",
            "value": 0.1749562598850852,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.1787284527336569 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_cv",
            "value": 0.0007182572956834828,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0007338012096299794 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_mean",
            "value": 0.03871380173736106,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.03871275765640856 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_median",
            "value": 0.038693741835316244,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0386935042972007 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_stddev",
            "value": 0.00005809247938755589,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0000579446252282913 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_cv",
            "value": 0.0015005625069235524,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.001496783715140455 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_mean",
            "value": 0.20108228664744957,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.201075137560038 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_median",
            "value": 0.20124774610952145,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.20124627579250545 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_stddev",
            "value": 0.0011725494344779154,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0011716763408888549 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_cv",
            "value": 0.005831192065831759,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.005827057263800255 ms\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_mean",
            "value": 501.5452873333288,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 501.5384403333485 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_median",
            "value": 501.46840399997933,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 501.45408600002384 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_stddev",
            "value": 0.23474954104101634,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.24145394796337452 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_cv",
            "value": 0.00046805253078771516,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004814266037173376 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_mean",
            "value": 501.4877583632892,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 501.47792271050315 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_median",
            "value": 501.210512393187,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 501.2018600459913 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_stddev",
            "value": 0.4819545674821719,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.4868273309855157 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_cv",
            "value": 0.0009610495160542544,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009707851710683482 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_mean",
            "value": 501.20905261383865,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 501.2002205018651 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_median",
            "value": 501.16635852579776,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 501.16710698589486 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_stddev",
            "value": 0.35127117259219204,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.35346262848559235 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_cv",
            "value": 0.0007008476218860961,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007052323882293204 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_mean",
            "value": 499.79351124923363,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 499.771961259703 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_median",
            "value": 501.54954207125803,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 501.5437767408088 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_stddev",
            "value": 4.148609826699689,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.150670741796874 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_cv",
            "value": 0.00830064763412042,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008305129266025404 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_mean",
            "value": 497.2262341397192,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 497.21036496638993 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_median",
            "value": 496.2612730433,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 496.2435689274414 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_stddev",
            "value": 3.523365655747382,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.521781747451034 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_cv",
            "value": 0.007086041350660766,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007083081921852326 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_mean",
            "value": 68576.57637872206,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 68574.26793557785 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_median",
            "value": 68565.65739385062,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 68562.44489995168 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_stddev",
            "value": 78.78956615652655,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 77.97440226325784 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_cv",
            "value": 0.0011489282538895214,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011370796161690117 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_mean",
            "value": 373382.819939656,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 373360.44970728696 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_median",
            "value": 371947.05375195225,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 371937.81692389725 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_stddev",
            "value": 3198.7233414579423,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3195.237750702303 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_cv",
            "value": 0.008566873382055718,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008558050948372694 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_mean",
            "value": 1756145.4489112694,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1756080.5041876098 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_median",
            "value": 1756152.9899497407,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1756053.4296482352 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_stddev",
            "value": 432.6774298399866,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 424.05200110504023 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_cv",
            "value": 0.00024637904002098855,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00024147640161930575 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_mean",
            "value": 7744035.359259113,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7742035.67407407 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_median",
            "value": 7734967.100000429,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7730272.433333438 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_stddev",
            "value": 19850.713781597227,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 21211.90227338739 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_cv",
            "value": 0.0025633552612673483,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0027398352534618474 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_mean",
            "value": 27999805.43055527,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27999271.9861113 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_median",
            "value": 27915025.999997545,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27915065.625000086 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_stddev",
            "value": 178555.7416444637,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 178432.15461729633 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_cv",
            "value": 0.006377035086451411,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006372742645087539 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_mean",
            "value": 626.4399226038137,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 626.4282746697276 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_median",
            "value": 626.4592313348502,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 626.4441647029672 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_stddev",
            "value": 0.0993606133437332,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.10486144015105135 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_cv",
            "value": 0.0001586115599573192,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00016739576483251422 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_mean",
            "value": 2411.622286745587,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2411.6015933372905 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_median",
            "value": 2411.017889740729,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2410.98844778763 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_stddev",
            "value": 1.0913114754862472,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.112508743336235 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_cv",
            "value": 0.0004525217242700721,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004613153127821134 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_mean",
            "value": 9716.097953095135,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9716.0193375269 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_median",
            "value": 9681.288441821825,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9681.140784770161 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_stddev",
            "value": 64.33529619001696,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 64.25137053502182 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_cv",
            "value": 0.0066215158081565535,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006612931520922258 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_mean",
            "value": 38683.49049647019,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38681.960087015694 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_median",
            "value": 38685.43039655082,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38684.12521431363 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_stddev",
            "value": 6.353883249283335,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.32262299421937 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_cv",
            "value": 0.00016425310042440756,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00016345146367962037 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_mean",
            "value": 167555.2163197075,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 167550.20483369238 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_median",
            "value": 167513.99688921176,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 167507.93323761868 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_stddev",
            "value": 85.90076723723159,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 83.55359871340613 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_cv",
            "value": 0.0005126713994587116,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004986779860779047 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_mean",
            "value": 673961.0505982431,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 673921.6403418769 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_median",
            "value": 674023.8430768677,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 673981.2615384649 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_stddev",
            "value": 566.6798582910397,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 546.3141931697218 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_cv",
            "value": 0.0008408198927638697,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008106494293499454 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_mean",
            "value": 696.9986842708912,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 696.9724996990759 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_median",
            "value": 697.0201159916054,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 696.9985077098275 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_stddev",
            "value": 1.337056727155699,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.3446014509419972 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_cv",
            "value": 0.0019183059557054296,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0019292030195201977 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_mean",
            "value": 2695.854275112142,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2695.7375032959544 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_median",
            "value": 2696.275167370583,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2696.1437826782717 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_stddev",
            "value": 1.0953771754762318,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.057814706019936 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_cv",
            "value": 0.00040631913437927435,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003924027115869385 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_mean",
            "value": 10836.195847640041,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10835.777894639106 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_median",
            "value": 10829.284328888929,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10828.724317134147 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_stddev",
            "value": 17.925967785516594,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 17.85135273785289 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_cv",
            "value": 0.001654267608075817,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016474454267547023 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_mean",
            "value": 43438.16633511976,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43436.4239297114 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_median",
            "value": 43446.25027975221,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43445.96698992899 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_stddev",
            "value": 43.64334609868709,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 44.01721854240383 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_cv",
            "value": 0.0010047234904435052,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010133711424686403 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_mean",
            "value": 186413.1085704183,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 186404.48896569945 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_median",
            "value": 186219.71842596738,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 186213.14224940256 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_stddev",
            "value": 416.7945123953393,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 417.98655274682574 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_cv",
            "value": 0.0022358648251278616,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0022423631269080655 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_mean",
            "value": 750854.0689654811,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 750814.6072797043 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_median",
            "value": 751302.8103447914,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 751247.4574712832 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_stddev",
            "value": 1460.4550925811727,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1453.5703965304094 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_cv",
            "value": 0.0019450585046350913,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0019359910987838634 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_mean",
            "value": 32.862630018856805,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.86133960015892 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_median",
            "value": 32.92369833503069,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.921801638191845 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_stddev",
            "value": 0.109802999888873,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.10973834811459392 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_cv",
            "value": 0.0033412724369859407,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0033394362326623836 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_mean",
            "value": 32.931410593405225,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.930022528600695 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_median",
            "value": 32.91848155250131,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.91643611284686 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_stddev",
            "value": 0.023450696231015963,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02436654727623304 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_cv",
            "value": 0.0007121072498398277,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007399493047740848 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_mean",
            "value": 32.87401296893624,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.87229737978812 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_median",
            "value": 32.72501696741351,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.723302034645755 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_stddev",
            "value": 0.2641655961403831,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2630935317206457 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_cv",
            "value": 0.008035696657721771,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00800350303116969 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_mean",
            "value": 32.896244985787725,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.89434453182846 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_median",
            "value": 32.811331976151656,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.809706360955694 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_stddev",
            "value": 0.23749379145718338,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.23702638182042113 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_cv",
            "value": 0.007219480264686399,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007205687944049933 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_mean",
            "value": 32.75448148651236,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.75270169504126 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_median",
            "value": 32.774672776238226,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.77375736000791 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_stddev",
            "value": 0.036601440856241,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0369009621478771 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_cv",
            "value": 0.0011174483366898278,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001126653993049492 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_mean",
            "value": 32.716094561603974,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.714244410642685 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_median",
            "value": 32.71295714194062,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.711113079306955 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_stddev",
            "value": 0.01583370289418683,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015906602337060618 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_cv",
            "value": 0.0004839728918246088,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004862286329280416 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "committer": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "id": "60456aebd6b208078f25eecc968cc47d0b81a773",
          "message": "Fix manifold build for v2.x by disabling optional targets\n\n- Disable Python, JS, and C bindings that fail on older versions\n- Add CMAKE_POSITION_INDEPENDENT_CODE=ON for linking\n- Try to build only the manifold library target first\n- Check for library file existence to verify build success\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-20T15:28:55Z",
          "url": "https://github.com/zalo/manifold-benchmarks/commit/60456aebd6b208078f25eecc968cc47d0b81a773"
        },
        "date": 1768923822282,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SphereCreation/16_mean",
            "value": 39914.65391821664,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 39910.05476038709 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_median",
            "value": 39860.91412180321,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 39849.91655560063 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_stddev",
            "value": 100.94504055375155,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 104.61888003844228 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_cv",
            "value": 0.0025290220669477296,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00262136648688045 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_mean",
            "value": 170260.5601506754,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 169577.0227618819 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_median",
            "value": 169041.36018274276,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 168384.3938446741 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_stddev",
            "value": 3845.749097885553,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3808.182289300303 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_cv",
            "value": 0.022587433604600984,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.022456947452413462 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_mean",
            "value": 861760.3517608806,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 861729.7170352172 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_median",
            "value": 861742.2002456967,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 861740.3243243248 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_stddev",
            "value": 867.6301307549011,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 855.454114917948 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_cv",
            "value": 0.0010068113820530574,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009927174356492423 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_mean",
            "value": 3239957.347222205,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3239760.9567901245 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_median",
            "value": 3234581.134258797,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3234444.1435185187 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_stddev",
            "value": 12288.90095274298,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12261.108070862114 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_cv",
            "value": 0.0037929205960933214,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0037845718355128642 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_mean",
            "value": 9699385.421297034,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9697401.888888892 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_median",
            "value": 9629182.90277849,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9628505.236111114 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_stddev",
            "value": 214988.1034682421,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 217306.30486146008 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_cv",
            "value": 0.0221651263590568,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02240871393712637 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_mean",
            "value": 31560524.257573966,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 31557546.969696965 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_median",
            "value": 31546597.681814212,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 31539413.90909086 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_stddev",
            "value": 31704.20350951998,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 33206.571290337066 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_cv",
            "value": 0.0010045524988993657,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010522545152899106 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_mean",
            "value": 4498.421717463588,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4498.222372065741 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_median",
            "value": 4495.088769441818,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4494.768549557524 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_stddev",
            "value": 9.712219080484495,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.720800437264213 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_cv",
            "value": 0.002159028141532422,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0021610315438451923 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_mean",
            "value": 4504.336883489639,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4504.148444530144 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_median",
            "value": 4501.506119038296,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4501.282722715011 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_stddev",
            "value": 8.664488425593735,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8.664105105927442 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_cv",
            "value": 0.001923588010779759,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00192358338376906 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_mean",
            "value": 4515.950909349284,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4515.412556941969 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_median",
            "value": 4518.487089565961,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4518.448752228155 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_stddev",
            "value": 6.083570100071337,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.941915264528415 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_cv",
            "value": 0.0013471293692490411,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015373822827896323 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_mean",
            "value": 20827.26978459911,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 20826.796769011027 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_median",
            "value": 20829.659318098154,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 20829.155628942026 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_stddev",
            "value": 22.131576715948594,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 22.089486553939278 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_cv",
            "value": 0.001062624959720547,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001060628132061434 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_mean",
            "value": 42541.596194419726,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 42540.07765335928 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_median",
            "value": 42485.7973466418,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 42483.928919182086 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_stddev",
            "value": 103.62245807524862,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 103.52651002394346 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_cv",
            "value": 0.0024357914922064215,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0024336229676761825 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_mean",
            "value": 86082.96367989508,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86078.12214917624 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_median",
            "value": 85670.29291453928,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 85660.73630387147 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_stddev",
            "value": 1749.7809549028518,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1750.5396569790025 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_cv",
            "value": 0.02032668114691686,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.020336638547310073 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_mean",
            "value": 171976.22741433734,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 171971.7046237087 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_median",
            "value": 171928.9510575647,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 171924.16207575 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_stddev",
            "value": 85.0393455554621,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 87.59408378086044 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_cv",
            "value": 0.0004944831435950695,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005093517213923364 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_mean",
            "value": 410289.4099099101,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 410281.2910301606 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_median",
            "value": 410311.49764984526,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 410298.25381903717 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_stddev",
            "value": 644.9870027610493,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 640.2895754301879 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_cv",
            "value": 0.0015720293704452992,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015606111939018908 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_mean",
            "value": 224.05336815964446,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 224.04393826634637 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_median",
            "value": 223.81205365393382,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 223.80804423477176 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_stddev",
            "value": 2.012983408952347,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.0144261183508223 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_cv",
            "value": 0.008984392537754838,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008991210090031742 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_mean",
            "value": 225.18114381588944,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 225.1748192677279 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_median",
            "value": 222.25014859256268,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 222.2431645823613 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_stddev",
            "value": 5.3377848972145125,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.335731303563434 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_cv",
            "value": 0.023704404404210434,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.023695950199561906 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_mean",
            "value": 222.75032548373485,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 222.74369127604106 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_median",
            "value": 222.62907613826474,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 222.61910482951825 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_stddev",
            "value": 0.4822024631293178,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.48486861688513744 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_cv",
            "value": 0.00216476659274075,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0021768006721422746 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_mean",
            "value": 223.25144240142117,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 223.24355357613194 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_median",
            "value": 221.9942352769748,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 221.98894471145613 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_stddev",
            "value": 2.621805179069666,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.6182083918585777 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_cv",
            "value": 0.011743732317551986,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011728035815223213 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_mean",
            "value": 222.30732281500852,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 222.2962755853433 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_median",
            "value": 222.0616790374795,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 222.05766460731243 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_stddev",
            "value": 1.3592912585355046,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.365013900265868 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_cv",
            "value": 0.006114469111153074,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0061405162847265795 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_mean",
            "value": 221.57532678951017,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 221.56823576422914 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_median",
            "value": 222.15825428244474,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 222.15082399001128 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_stddev",
            "value": 1.1145282871417892,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.1177710916975812 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_cv",
            "value": 0.005030019827977314,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005044816500172894 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_mean",
            "value": 223.07935373413477,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 223.07078414800029 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_median",
            "value": 222.62319847038455,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 222.61092307375262 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_stddev",
            "value": 0.8346918695548918,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.8329632626911764 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_cv",
            "value": 0.003741681404320701,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0037340760058409625 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_mean",
            "value": 225.2850213193451,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 225.27654033821815 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_median",
            "value": 224.47214456054107,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 224.46407191489376 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_stddev",
            "value": 2.3161992425668227,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.317242918589516 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_cv",
            "value": 0.010281195034638247,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01028621495656197 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_mean",
            "value": 225.36398566080155,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 225.35534577193366 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_median",
            "value": 224.70757673136904,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 224.69906891175856 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_stddev",
            "value": 2.948203458454964,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.9495490990007354 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_cv",
            "value": 0.013081963605721572,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013088436348813164 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_mean",
            "value": 226.09667417143723,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 226.0864949607527 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_median",
            "value": 224.93392033612182,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 224.93137709538618 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_stddev",
            "value": 3.499070933962988,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.503187810749448 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_cv",
            "value": 0.015475994712376115,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015494900796076216 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_mean",
            "value": 226.415979629002,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 226.40801065824337 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_median",
            "value": 226.744827475056,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 226.7373498364187 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_stddev",
            "value": 1.6989149495361737,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.6990570290455185 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_cv",
            "value": 0.00750351168817661,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007504403329660442 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_mean",
            "value": 226.0435185105397,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 225.97382089517666 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_median",
            "value": 226.22054068074667,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 226.02868842640126 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_stddev",
            "value": 2.5169694465595045,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.515141452919846 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_cv",
            "value": 0.011134888817624498,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01113023377201979 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_mean",
            "value": 222.67153494652663,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 222.66578890962543 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_median",
            "value": 222.63390998648143,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 222.63011587289745 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_stddev",
            "value": 0.5937634212421153,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5887402189397616 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_cv",
            "value": 0.002666543891138598,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002644053322348126 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_mean",
            "value": 223.56451327678693,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 223.55425671501825 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_median",
            "value": 223.4275207369311,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 223.4183597336656 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_stddev",
            "value": 0.5409678632259152,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5396203053725586 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_cv",
            "value": 0.0024197394089828686,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00241382254716113 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_mean",
            "value": 225.33500687770132,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 225.32881039397773 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_median",
            "value": 224.96438201641232,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 224.95794302171396 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_stddev",
            "value": 1.2329130448218772,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.2344121797159282 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_cv",
            "value": 0.005471466958931199,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005478270521899138 ns\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_mean",
            "value": 0.0027239855352052538,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.002723940751415228 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_median",
            "value": 0.0027340972170572086,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0027340107459402872 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_stddev",
            "value": 0.000020143036296805476,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.000020165919897457484 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_cv",
            "value": 0.00739469282654898,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.007403215318461036 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_mean",
            "value": 0.012819041930180972,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.012818716344949417 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_median",
            "value": 0.012814067808104823,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.012813623838243122 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_stddev",
            "value": 0.000019311514063548126,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.000019579335423207757 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_cv",
            "value": 0.0015064709335321986,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0015274021903856254 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_mean",
            "value": 0.025600573779096136,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.02559587984425135 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_median",
            "value": 0.025597329561682078,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.025595198139807207 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_stddev",
            "value": 0.00007681588946854507,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0000747770568489974 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_cv",
            "value": 0.0030005534302230455,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0029214489716317287 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_mean",
            "value": 0.14817923564065547,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.14817021986114032 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_median",
            "value": 0.14829102819272746,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.14827776898800812 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_stddev",
            "value": 0.003624889587971508,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0036232168151700034 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_cv",
            "value": 0.024462871415817714,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.024453070384626206 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_mean",
            "value": 0.44690517441609107,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.44690063108491135 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_median",
            "value": 0.43703041912244317,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.437028390962678 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_stddev",
            "value": 0.023179116528662152,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.023178771943118934 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_cv",
            "value": 0.051865849526014286,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.05186560575412334 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_mean",
            "value": 45.31329620000027,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 45.30741859999998 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_median",
            "value": 45.3220907333313,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 45.315764266666754 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_stddev",
            "value": 0.017374628891301914,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.020571309978433993 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_cv",
            "value": 0.00038343334845064326,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0004540384469936234 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_mean",
            "value": 227.61476933333645,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 227.59202522222367 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_median",
            "value": 227.5761543333298,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 227.53364300000575 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_stddev",
            "value": 0.1933133580558134,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.21151260283528506 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_cv",
            "value": 0.0008493005907393934,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0009293497987408018 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_mean",
            "value": 0.025700752887836017,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.025699516351012402 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_median",
            "value": 0.025711616582038965,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.02571036911159656 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_stddev",
            "value": 0.00006313233732308135,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00006283479182785116 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_cv",
            "value": 0.002456439217893942,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0024449795462931296 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_mean",
            "value": 0.15502809838568685,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.1550229392088426 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_median",
            "value": 0.15642483660557915,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.15641956893542722 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_stddev",
            "value": 0.002805398762662288,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0028035382718609616 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_cv",
            "value": 0.018096066402639305,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.018084667250980915 ms\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_mean",
            "value": 494.2003517717967,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 494.1811058685411 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_median",
            "value": 496.83773129570756,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 496.80260698657975 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_stddev",
            "value": 4.756305580706205,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.746057355028955 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_cv",
            "value": 0.009624245639757233,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009603882662991715 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_mean",
            "value": 494.33616785089595,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 494.3188883190626 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_median",
            "value": 496.5126706846029,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 496.49441240842975 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_stddev",
            "value": 4.778879083922952,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.763834098209656 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_cv",
            "value": 0.009667265708473066,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009637167850108118 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_mean",
            "value": 494.4323066865946,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 494.42386769355176 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_median",
            "value": 496.54567638872913,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 496.5296020822986 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_stddev",
            "value": 4.7777177905755055,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.77863016635295 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_cv",
            "value": 0.009663037236771733,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009665047499921234 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_mean",
            "value": 497.40416285977057,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 497.3946787105163 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_median",
            "value": 497.5737315165997,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 497.55570976360156 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_stddev",
            "value": 8.674088291792794,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8.665082548682461 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_cv",
            "value": 0.017438712699793413,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.017420939385894677 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_mean",
            "value": 494.8876145919298,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 494.8836798346663 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_median",
            "value": 497.7777829128779,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 497.7859759392508 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_stddev",
            "value": 5.146986552542312,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.143647594361131 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_cv",
            "value": 0.01040031393144961,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010393649667492675 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_mean",
            "value": 82235.40495045941,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 82233.59141512636 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_median",
            "value": 82010.96855273859,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 82011.07242051995 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_stddev",
            "value": 2148.3265103963736,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2148.242240300488 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_cv",
            "value": 0.026124106906150427,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0261236582682601 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_mean",
            "value": 412371.68727272516,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 412367.6341414076 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_median",
            "value": 415026.0072726793,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 415022.7884848377 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_stddev",
            "value": 5914.917625182057,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5915.82778775295 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_cv",
            "value": 0.014343655997096088,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01434600414280893 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_mean",
            "value": 1927080.8958903768,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1927072.106849307 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_median",
            "value": 1927171.8602738797,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1927184.2054794654 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_stddev",
            "value": 1807.2547410705718,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1797.0050393697923 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_cv",
            "value": 0.0009378198626350653,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009325053447573536 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_mean",
            "value": 8507545.554217162,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8507290.50200771 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_median",
            "value": 8514069.831325702,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8514044.21686755 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_stddev",
            "value": 17868.82043096211,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 17863.648450198707 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_cv",
            "value": 0.0021003496622012913,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0020998046846975433 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_mean",
            "value": 33377437.63492134,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 33376301.269842062 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_median",
            "value": 33395205.380949322,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 33393501.14285772 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_stddev",
            "value": 91855.65083835338,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 92534.61090173158 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_cv",
            "value": 0.0027520282366507625,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002772464514674769 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_mean",
            "value": 628.1382964279217,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 628.1323565652218 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_median",
            "value": 628.0997604436203,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 628.0956754234747 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_stddev",
            "value": 0.17671829437970718,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.17773627087828667 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_cv",
            "value": 0.0002813366027587612,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0002829599033079448 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_mean",
            "value": 2413.4719362165665,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2413.460665662494 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_median",
            "value": 2413.4592926059727,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2413.494769171365 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_stddev",
            "value": 0.8018444591650199,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.8011026850255814 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_cv",
            "value": 0.00033223691029199046,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00033193111303750166 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_mean",
            "value": 9667.842669327967,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9667.508726221151 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_median",
            "value": 9667.825397046272,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9667.263477368857 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_stddev",
            "value": 1.9099022616262626,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.8580175684976379 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_cv",
            "value": 0.00019755206274566154,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00019219197221494543 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_mean",
            "value": 38679.35016574457,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38677.41473296493 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_median",
            "value": 38654.83917126657,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38653.22226519165 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_stddev",
            "value": 69.83076924968687,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 69.91585081232456 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_cv",
            "value": 0.0018053759680670852,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001807666083553795 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_mean",
            "value": 165545.31803486097,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 165540.49168047015 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_median",
            "value": 165436.21646556444,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 165432.73834871317 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_stddev",
            "value": 263.7743055976443,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 261.4672764991136 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_cv",
            "value": 0.0015933661472811813,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001579476258919198 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_mean",
            "value": 669568.4224358918,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 669553.6977564241 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_median",
            "value": 669377.6740384841,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 669379.5759615612 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_stddev",
            "value": 701.6310701491306,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 689.8396797266932 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_cv",
            "value": 0.0010478855433423736,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010302977670622155 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_mean",
            "value": 700.5931049782681,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 700.554349835535 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_median",
            "value": 700.6174700932357,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 700.5847657573221 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_stddev",
            "value": 0.20284666439860763,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.23036483184554132 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_cv",
            "value": 0.0002895356276806347,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00032883220538081407 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_mean",
            "value": 2707.2509594373964,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2706.5102584495285 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_median",
            "value": 2704.9373528029955,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2704.8583276062195 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_stddev",
            "value": 4.370381970381733,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.2019576128277145 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_cv",
            "value": 0.0016143246547375713,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011830576303309534 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_mean",
            "value": 10887.136921580279,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10886.866509351275 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_median",
            "value": 10839.234902350503,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10838.812245785213 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_stddev",
            "value": 84.06403056870921,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.09823795150506 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_cv",
            "value": 0.0077214084083097245,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007724742273570532 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_mean",
            "value": 43381.65923770589,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43380.68206112335 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_median",
            "value": 43330.33405559263,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43328.93152974546 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_stddev",
            "value": 112.20092957279094,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 112.26579627783191 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_cv",
            "value": 0.0025863678693799166,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0025879214190235524 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_mean",
            "value": 187048.20195816772,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 187040.79109924092 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_median",
            "value": 187048.31214953237,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 187044.22483312234 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_stddev",
            "value": 48.78567425636869,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38.71304474540081 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_cv",
            "value": 0.00026081872878563856,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00020697648100119655 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_mean",
            "value": 754640.6070214844,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 754393.834277083 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_median",
            "value": 754645.2151755682,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 754603.6296715756 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_stddev",
            "value": 2263.283812793409,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1979.6642233837408 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_cv",
            "value": 0.002999154553485317,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002624178689478294 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_mean",
            "value": 34.88245679099768,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 34.8814556406426 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_median",
            "value": 34.853918303681674,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 34.85299549036532 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_stddev",
            "value": 0.07094649916881073,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07032171952500231 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_cv",
            "value": 0.002033873347680038,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002016020209978451 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_mean",
            "value": 34.859495882883934,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 34.84047059005681 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_median",
            "value": 34.83675636881704,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 34.83605134383797 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_stddev",
            "value": 0.03987815912807749,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008607616043565221 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_cv",
            "value": 0.0011439683253611746,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0002470579730350073 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_mean",
            "value": 34.85587211963442,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 34.854776989645224 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_median",
            "value": 34.83359641870757,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 34.8333471537348 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_stddev",
            "value": 0.060946681087285855,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06002404224433567 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_cv",
            "value": 0.001748534102893796,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017221180976761897 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_mean",
            "value": 34.820644888323635,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 34.818983781359385 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_median",
            "value": 34.77254571981259,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 34.77042183809649 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_stddev",
            "value": 0.09358963539122288,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.09369824746072647 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_cv",
            "value": 0.002687762839872221,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0026910103996455105 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_mean",
            "value": 34.87961000019228,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 34.87800692617914 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_median",
            "value": 34.87673556960524,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 34.87570977958964 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_stddev",
            "value": 0.012388934373938206,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011283595276241572 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_cv",
            "value": 0.000355191310162869,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00032351605698467244 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_mean",
            "value": 34.82673502047655,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 34.82484691407569 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_median",
            "value": 34.80295313345152,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 34.800504399932905 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_stddev",
            "value": 0.053507872502049296,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05400920433179193 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_cv",
            "value": 0.001536402205678743,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001550881313708294 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "committer": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "id": "60456aebd6b208078f25eecc968cc47d0b81a773",
          "message": "Fix manifold build for v2.x by disabling optional targets\n\n- Disable Python, JS, and C bindings that fail on older versions\n- Add CMAKE_POSITION_INDEPENDENT_CODE=ON for linking\n- Try to build only the manifold library target first\n- Check for library file existence to verify build success\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-20T15:28:55Z",
          "url": "https://github.com/zalo/manifold-benchmarks/commit/60456aebd6b208078f25eecc968cc47d0b81a773"
        },
        "date": 1768924184008,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SphereCreation/16_mean",
            "value": 45611.58294594591,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 45607.48773243802 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_median",
            "value": 44906.27621384585,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 44897.583871384304 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_stddev",
            "value": 1271.8757074680937,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1272.532795763683 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_cv",
            "value": 0.02788492802311614,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.027901839347721898 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_mean",
            "value": 191257.2066197387,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 190356.85876623375 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_median",
            "value": 188081.0641233198,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 187228.4258658009 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_stddev",
            "value": 6348.175138669449,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6284.647571387875 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_cv",
            "value": 0.03319182189715347,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.033015083418169285 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_mean",
            "value": 1139583.727569618,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1139409.1489940183 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_median",
            "value": 1137449.618271177,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1137281.9135399673 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_stddev",
            "value": 5318.0785078680055,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5144.887364054545 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_cv",
            "value": 0.004666685193206324,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00451539937922822 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_mean",
            "value": 3701442.2943260507,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3701134.572695034 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_median",
            "value": 3702648.324466726,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3702323.175531914 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_stddev",
            "value": 5239.552141760265,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5038.93023976792 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_cv",
            "value": 0.001415543381506173,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001361455559314816 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_mean",
            "value": 10397769.31862639,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10396624.421568641 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_median",
            "value": 10434624.911768505,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10434038.676470604 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_stddev",
            "value": 85630.77604147255,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86927.44061368016 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_cv",
            "value": 0.008235494885241876,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008361121561084973 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_mean",
            "value": 30498285.50724603,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30488629.289855078 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_median",
            "value": 30408571.086947788,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30380201.56521742 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_stddev",
            "value": 187189.14286684408,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 194041.04479097496 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_cv",
            "value": 0.006137693963890861,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006364374171965188 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_mean",
            "value": 4194.898517432376,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4194.481452457151 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_median",
            "value": 4193.112661141436,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4192.465127269462 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_stddev",
            "value": 4.945785659512226,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.83635395349195 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_cv",
            "value": 0.0011790000732936575,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011530278553642875 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_mean",
            "value": 4188.7453538586815,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4188.503266207947 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_median",
            "value": 4191.025583293712,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4190.610606770165 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_stddev",
            "value": 4.942662956549329,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.761804703134405 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_cv",
            "value": 0.0011799864969103786,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011368750125018991 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_mean",
            "value": 4190.231936629724,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4190.035691767418 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_median",
            "value": 4185.900275349849,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4185.62888782473 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_stddev",
            "value": 9.342558794274018,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.251322911631062 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_cv",
            "value": 0.002229604216560002,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002207934154309965 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_mean",
            "value": 19191.58961349579,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19190.70271135006 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_median",
            "value": 19199.422252075776,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19198.974056603816 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_stddev",
            "value": 24.9259313126143,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.914256815242137 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_cv",
            "value": 0.0012987945143994764,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001298246197128934 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_mean",
            "value": 38401.93917955658,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38399.65441848552 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_median",
            "value": 38402.3154546332,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38400.00488099144 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_stddev",
            "value": 8.146944075076329,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8.385471458807649 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_cv",
            "value": 0.00021214928852898618,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0002183736178305526 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_mean",
            "value": 78338.99687150629,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78335.1020484171 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_median",
            "value": 78272.33810058211,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78268.68022346355 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_stddev",
            "value": 138.15104266199975,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 137.04105714576525 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_cv",
            "value": 0.0017635028297413456,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017494208032187587 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_mean",
            "value": 159317.00668033143,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 159308.14195703308 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_median",
            "value": 159319.82600778886,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 159305.34411295797 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_stddev",
            "value": 99.7592164160077,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 92.86217897431472 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_cv",
            "value": 0.0006261680312395898,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005829091836333169 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_mean",
            "value": 468516.4451110621,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 468501.4706666656 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_median",
            "value": 468654.9646667117,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 468611.203333334 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_stddev",
            "value": 1541.9242402702748,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1542.5876552564769 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_cv",
            "value": 0.0032910781603509368,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0032925993872792206 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_mean",
            "value": 158.13288966703388,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 158.12893797858146 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_median",
            "value": 160.98242600880764,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 160.97649185196403 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_stddev",
            "value": 5.333277863806002,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.331812201653623 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_cv",
            "value": 0.03372655666405516,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03371813072175199 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_mean",
            "value": 150.19165554916967,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.18913671512192 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_median",
            "value": 149.49716084633445,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.49555309802972 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_stddev",
            "value": 1.4276725453283248,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.4289776612190463 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_cv",
            "value": 0.009505671537530484,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009514520773426674 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_mean",
            "value": 152.57871704464796,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.57341228038737 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_median",
            "value": 153.6369605012861,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153.63250740557288 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_stddev",
            "value": 1.9971795679846869,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.9987760995489297 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_cv",
            "value": 0.013089502957350648,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01310042208321157 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_mean",
            "value": 151.88967238265772,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.88689689646256 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_median",
            "value": 152.80682006059018,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.8074683039308 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_stddev",
            "value": 1.71971137963072,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.7182262928402816 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_cv",
            "value": 0.011322108690169716,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011312537999980032 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_mean",
            "value": 151.80481468048856,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.79937350413175 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_median",
            "value": 152.46752436892194,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.46684317404726 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_stddev",
            "value": 1.641782976524282,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.6449673935926838 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_cv",
            "value": 0.010815091602857442,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010836457065798827 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_mean",
            "value": 149.61780447135382,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.6109314950329 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_median",
            "value": 149.34759887305276,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.34036602374482 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_stddev",
            "value": 0.6027542269709147,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6007009103297621 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_cv",
            "value": 0.004028626332946353,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004015087028247702 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_mean",
            "value": 152.4393873418353,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.43206937753982 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_median",
            "value": 149.5427095793918,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.53324995575258 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_stddev",
            "value": 5.267665155818282,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.264998026708047 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_cv",
            "value": 0.034555801146103335,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03453996293698432 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_mean",
            "value": 153.77267007355184,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153.7646638103592 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_median",
            "value": 150.73464756433688,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.72988884491664 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_stddev",
            "value": 5.710264753167851,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.711903111475272 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_cv",
            "value": 0.0371344579660127,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03714704646653972 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_mean",
            "value": 156.80301754660275,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 156.79660864278358 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_median",
            "value": 153.54563310028036,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153.53766407452005 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_stddev",
            "value": 5.923898418793292,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.920491960357673 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_cv",
            "value": 0.037779237360866955,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03775905621687155 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_mean",
            "value": 154.50003344504623,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 154.4895889614466 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_median",
            "value": 153.3325794179141,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153.3298490097679 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_stddev",
            "value": 3.938339570989701,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.9286883445340783 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_cv",
            "value": 0.025490865491563278,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.025430117142162218 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_mean",
            "value": 155.83512341142605,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 155.82753606743248 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_median",
            "value": 152.76806007191777,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.7593520459378 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_stddev",
            "value": 5.984296204314621,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.983749861494513 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_cv",
            "value": 0.03840145965370888,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.038399823372071526 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_mean",
            "value": 152.76174787851087,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.75513422561914 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_median",
            "value": 152.5466824037535,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.54270144987848 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_stddev",
            "value": 0.41637529471032114,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.4172123273830933 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_cv",
            "value": 0.002725651548851472,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002731249129517776 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_mean",
            "value": 150.3011914753919,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.29473541887057 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_median",
            "value": 150.2569522513718,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.2494110333827 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_stddev",
            "value": 0.21419658712862766,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.21470397764962657 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_cv",
            "value": 0.001425115696196574,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014285528834476326 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_mean",
            "value": 153.1479663043874,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153.14127044595566 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_median",
            "value": 153.11952632634083,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153.11071134931254 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_stddev",
            "value": 0.05731964119609659,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05746363067375051 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_cv",
            "value": 0.00037427621521379936,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00037523281938574304 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_mean",
            "value": 152.27861650990914,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.27361187041473 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_median",
            "value": 150.10398081330527,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.10097268220093 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_stddev",
            "value": 3.7929457304061045,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.7922039985624725 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_cv",
            "value": 0.024907934005030104,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02490388158514063 ns\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_mean",
            "value": 0.0019213580071061461,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0019212051505247847 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_median",
            "value": 0.0018752639096613847,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0018751732677054266 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_stddev",
            "value": 0.0000832781291420205,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00008329783020143123 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_cv",
            "value": 0.04334336903066278,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.04335707208502855 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_mean",
            "value": 0.014040427901257561,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.014039790404996774 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_median",
            "value": 0.013987576975971637,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.013987425934416339 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_stddev",
            "value": 0.00014237009667399025,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0001422210392535006 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_cv",
            "value": 0.01014001123578567,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.010129854873252521 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_mean",
            "value": 0.029606992421374132,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029606276794844996 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_median",
            "value": 0.02964699752048225,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029646841143097468 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_stddev",
            "value": 0.00010809315203379985,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00010723857175383856 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_cv",
            "value": 0.0036509332152145353,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.003622156629046675 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_mean",
            "value": 0.17858109762263194,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.17857195565671913 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_median",
            "value": 0.17837302857860196,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.17835874127466023 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_stddev",
            "value": 0.0004499521479392823,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0004583164767906843 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_cv",
            "value": 0.0025195956007062806,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0025665646943562447 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_mean",
            "value": 0.3474877744005034,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3469602624113537 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_median",
            "value": 0.3484554863220221,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.34836727963526637 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_stddev",
            "value": 0.0033543047209169514,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0028326517463387493 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_cv",
            "value": 0.009653015064210246,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.008164196460574431 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_mean",
            "value": 48.4615707380921,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 48.45898854761916 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_median",
            "value": 48.4346951428571,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 48.43308014285899 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_stddev",
            "value": 0.06807904888233428,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.06719365317261115 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_cv",
            "value": 0.0014048048349539423,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0013866086599513322 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_mean",
            "value": 243.03769433335117,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 243.00384233333398 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_median",
            "value": 243.00707633346974,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 242.97637266666547 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_stddev",
            "value": 0.08269729132629915,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.06923835038160207 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_cv",
            "value": 0.000340265289107258,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0002849269777661632 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_mean",
            "value": 0.029378487228686263,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029376347182246392 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_median",
            "value": 0.029299001418262503,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029296095982980826 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_stddev",
            "value": 0.00015377700352856783,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00015568209201520118 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_cv",
            "value": 0.005234340431879494,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0052995728519060975 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_mean",
            "value": 0.16676255555556327,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.16675720765289823 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_median",
            "value": 0.16679195821327444,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.16679226512968373 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_stddev",
            "value": 0.0005672514397520536,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0005626540179004368 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_cv",
            "value": 0.003401551612484448,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.003374091146162569 ms\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_mean",
            "value": 412.6656748529783,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 412.55509625180866 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_median",
            "value": 412.3166521169715,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 412.31201365243123 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_stddev",
            "value": 1.0143609092291002,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.8752973126703881 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_cv",
            "value": 0.0024580695004266825,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0021216494975404166 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_mean",
            "value": 411.7685261206723,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 411.7383176487529 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_median",
            "value": 411.29554682825,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 411.25901819127586 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_stddev",
            "value": 0.8301867024925293,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.8396004640120176 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_cv",
            "value": 0.0020161490007840864,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0020391603793559645 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_mean",
            "value": 412.0922906909248,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 412.06991296406926 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_median",
            "value": 412.27999315058815,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 412.24889476543194 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_stddev",
            "value": 0.4653354256754049,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.4635403578086221 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_cv",
            "value": 0.001129201968071791,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011249070684979639 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_mean",
            "value": 412.16027559286266,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 412.13662230655586 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_median",
            "value": 412.1671380766458,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 412.13593122019057 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_stddev",
            "value": 0.26328189944122893,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2541248029424032 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_cv",
            "value": 0.0006387852372781852,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000616603303827195 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_mean",
            "value": 412.5529090592145,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 412.51900794655785 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_median",
            "value": 412.38854883631217,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 412.36868460873626 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_stddev",
            "value": 0.49645932492186245,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.49568570537758916 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_cv",
            "value": 0.0012033834061526507,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012016069461744793 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_mean",
            "value": 68451.44054578886,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 68447.86211825823 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_median",
            "value": 68017.6889863483,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 68017.24424951129 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_stddev",
            "value": 838.0617297386807,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 834.6985966708329 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_cv",
            "value": 0.01224315694536889,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012194662781851587 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_mean",
            "value": 316412.8936716232,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 316401.97915722517 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_median",
            "value": 316502.6275486279,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 316499.9841413619 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_stddev",
            "value": 1338.859402787092,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1341.7363341306482 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_cv",
            "value": 0.004231368030711716,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004240606641287532 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_mean",
            "value": 1723285.6097566618,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1723261.0414633816 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_median",
            "value": 1705038.3682932835,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1704984.7024390057 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_stddev",
            "value": 32430.591765624897,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32443.350803523794 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_cv",
            "value": 0.01881904635076961,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01882671865892884 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_mean",
            "value": 7746370.281483906,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7741754.618518509 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_median",
            "value": 7745853.900001343,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7745783.455555335 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_stddev",
            "value": 19161.11372993178,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26051.84433316572 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_cv",
            "value": 0.0024735602654745873,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0033651085079406846 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_mean",
            "value": 27415509.519996703,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27414156.97333309 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_median",
            "value": 27260435.160005722,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27258997.679999765 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_stddev",
            "value": 301946.88563515665,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 301387.65273478517 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_cv",
            "value": 0.011013725111142599,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010993869081145104 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_mean",
            "value": 644.4076435001645,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 644.3887936284985 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_median",
            "value": 644.5002098394187,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 644.5033422095886 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_stddev",
            "value": 0.3161833095010736,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3261390367751186 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_cv",
            "value": 0.0004906572923059887,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005061215216649832 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_mean",
            "value": 2511.207652540645,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2511.160323323937 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_median",
            "value": 2508.63908209586,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2508.6512478678287 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_stddev",
            "value": 4.602099704515157,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.61373496556875 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_cv",
            "value": 0.0018326241160738378,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0018372920767805486 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_mean",
            "value": 9995.777220484762,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9995.598105199873 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_median",
            "value": 9998.207513470094,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9998.251153884603 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_stddev",
            "value": 6.899531176147189,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.886678087892289 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_cv",
            "value": 0.0006902445926873692,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006889710866135889 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_mean",
            "value": 40248.236510301744,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40246.36420249889 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_median",
            "value": 40228.973212226505,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40226.48585881892 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_stddev",
            "value": 34.18073882217628,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 35.943221524939794 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_cv",
            "value": 0.0008492481108688463,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008930799647911572 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_mean",
            "value": 167841.13555396805,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 167834.08922437785 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_median",
            "value": 167843.58135638255,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 167836.17229810506 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_stddev",
            "value": 106.55819730867732,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 111.00435552132716 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_cv",
            "value": 0.0006348753358762537,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006613933798212182 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_mean",
            "value": 672107.3680962672,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 672087.4710851271 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_median",
            "value": 672156.4931774293,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 672133.3635477732 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_stddev",
            "value": 134.07917965091784,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 128.76423251339716 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_cv",
            "value": 0.0001994907153461133,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00019158850306419086 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_mean",
            "value": 745.1193871062833,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 745.1032604572764 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_median",
            "value": 745.033184158466,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 745.0322338822613 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_stddev",
            "value": 0.15375594303957416,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.14388332936803547 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_cv",
            "value": 0.00020635074821592655,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0001931052204492207 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_mean",
            "value": 2917.567090639736,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2916.94462243066 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_median",
            "value": 2917.02348030076,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2916.8958217895756 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_stddev",
            "value": 1.0205223121573488,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.7491785160854605 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_cv",
            "value": 0.0003497853795484026,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005996612011879362 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_mean",
            "value": 11626.153741721784,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11625.721009614093 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_median",
            "value": 11627.656720134319,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11626.894522483119 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_stddev",
            "value": 5.971844217929735,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.951711548914836 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_cv",
            "value": 0.0005136560508828545,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005119434350775287 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_mean",
            "value": 46871.189790638724,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 46869.46455515322 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_median",
            "value": 46873.57720637465,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 46871.75833667952 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_stddev",
            "value": 11.76093967280424,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10.343869103832946 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_cv",
            "value": 0.00025092044228741076,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00022069526934025217 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_mean",
            "value": 193857.6474926213,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 193848.91426990993 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_median",
            "value": 193729.9988937051,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 193719.7364491079 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_stddev",
            "value": 325.05445558674506,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 325.6141012141274 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_cv",
            "value": 0.0016767688032483601,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016797313641940298 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_mean",
            "value": 775543.5138734961,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 775503.5974843005 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_median",
            "value": 775974.009988775,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 775909.9955605188 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_stddev",
            "value": 755.0880390027852,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 738.0245451671063 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_cv",
            "value": 0.0009736243363463325,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000951671336614331 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_mean",
            "value": 14.425538940521252,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.424823537074731 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_median",
            "value": 14.424300691839472,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.423433109489588 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_stddev",
            "value": 0.013381036401210702,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013146179679547459 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_cv",
            "value": 0.0009275935170521394,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009113580936195927 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_mean",
            "value": 14.443066550816312,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.442054030135056 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_median",
            "value": 14.45303126740009,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.451941462160933 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_stddev",
            "value": 0.0407066137393352,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04087516889210132 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_cv",
            "value": 0.0028184190383748167,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002830287769787486 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_mean",
            "value": 14.438369387303352,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.437827965692732 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_median",
            "value": 14.442550057069852,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.442607904664174 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_stddev",
            "value": 0.03129680242146486,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.031324810994789364 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_cv",
            "value": 0.002167613362834884,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0021696345924902003 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_mean",
            "value": 14.419876834466864,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.419353379205653 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_median",
            "value": 14.417946153451853,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.417888581923172 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_stddev",
            "value": 0.015437968734372524,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015533328099914978 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_cv",
            "value": 0.0010706033700282503,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010772555253632805 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_mean",
            "value": 14.413329682222718,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.41245988963594 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_median",
            "value": 14.415205957235678,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.413743182058107 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_stddev",
            "value": 0.01992857676799249,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.020338068504716426 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_cv",
            "value": 0.0013826490621783412,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001411144846921074 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_mean",
            "value": 14.408307957174967,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.40782173274832 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_median",
            "value": 14.404629509390732,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.404474672521125 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_stddev",
            "value": 0.007750195294528885,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007733308513441571 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_cv",
            "value": 0.0005378976710911767,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005367437671625346 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "committer": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "id": "eb329478273a7ee6ea3d474e7e028c3d5e845053",
          "message": "Fix tag display in dashboard by creating marker commits\n\nCreate temporary commits with \"Benchmark: vX.Y.Z\" message before\nrunning benchmark-action so the tag info is captured in data.js.\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-20T15:52:39Z",
          "url": "https://github.com/zalo/manifold-benchmarks/commit/eb329478273a7ee6ea3d474e7e028c3d5e845053"
        },
        "date": 1768924677390,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SphereCreation/16_mean",
            "value": 44958.86825988241,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 44954.83367596043 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_median",
            "value": 44982.72317872298,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 44979.533920082235 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_stddev",
            "value": 57.7557240560944,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 56.87069657907571 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_cv",
            "value": 0.001284634740408509,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001265062996095285 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_mean",
            "value": 191630.16806117925,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 190273.03706702657 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_median",
            "value": 188893.56410256567,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 187701.68448043198 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_stddev",
            "value": 4772.731832614539,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4486.783661131769 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_cv",
            "value": 0.024905952339877982,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02358076441251753 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_mean",
            "value": 1136702.2121212163,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1136542.8490259738 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_median",
            "value": 1137299.548701285,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1137197.089285714 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_stddev",
            "value": 1165.8265350546578,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1223.176065669937 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_cv",
            "value": 0.0010256217702603852,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010762252093867017 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_mean",
            "value": 3610936.9022687264,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3610463.3001745157 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_median",
            "value": 3611588.832460698,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3611025.4869109895 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_stddev",
            "value": 1506.4830346158333,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1608.4930341531856 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_cv",
            "value": 0.00041720004402993595,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004455087617357688 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_mean",
            "value": 9859465.28240748,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9858807.06481481 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_median",
            "value": 9827526.694444483,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9826729.958333323 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_stddev",
            "value": 74715.32608448617,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 74974.8697126966 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_cv",
            "value": 0.00757803024245167,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007604862253596089 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_mean",
            "value": 30209542.942029044,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30202728.13043478 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_median",
            "value": 30154621.69565252,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30139495.95652175 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_stddev",
            "value": 204460.08364658794,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 206129.83712131766 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_cv",
            "value": 0.0067680627952213315,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006824874767309649 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_mean",
            "value": 4194.318506192719,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4193.559221143046 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_median",
            "value": 4196.942664906219,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4195.93963235605 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_stddev",
            "value": 11.262228532898021,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10.85272770639834 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_cv",
            "value": 0.0026851152377364417,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0025879514593906685 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_mean",
            "value": 4198.899217071238,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4198.345182085368 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_median",
            "value": 4200.6281672935465,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4200.340561918701 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_stddev",
            "value": 24.672862649181226,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.631463463357818 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_cv",
            "value": 0.0058760311628509925,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0058669457595964215 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_mean",
            "value": 4197.120377815908,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4196.901173373663 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_median",
            "value": 4196.105843664881,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4195.949772566343 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_stddev",
            "value": 6.357568442422653,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.349172232450203 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_cv",
            "value": 0.0015147453182486504,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015128238598352424 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_mean",
            "value": 19035.992315186802,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19034.955502745226 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_median",
            "value": 19080.701876587886,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19079.85304160179 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_stddev",
            "value": 145.15105770796453,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 145.3660246741605 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_cv",
            "value": 0.007625084907822949,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007636793511452957 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_mean",
            "value": 37230.30449436134,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 37228.99761345205 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_median",
            "value": 37580.0203858556,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 37579.96299939872 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_stddev",
            "value": 675.1378955274846,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 676.0191131221185 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_cv",
            "value": 0.01813409545521543,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.018158402225630987 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_mean",
            "value": 76887.42051110596,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 76885.69482207853 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_median",
            "value": 76942.00022286536,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 76937.23545798991 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_stddev",
            "value": 1340.2927855297287,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1339.3609162269352 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_cv",
            "value": 0.017431886472718,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01742015753810062 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_mean",
            "value": 154117.09318028574,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 154116.97801785564 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_median",
            "value": 153605.7283367122,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153605.84087328392 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_stddev",
            "value": 1010.0363203703097,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1009.9333880855655 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_cv",
            "value": 0.006553694334143533,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00655303134719237 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_mean",
            "value": 459186.27953518025,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 459181.6029696586 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_median",
            "value": 459480.06520335114,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 459474.43641058606 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_stddev",
            "value": 3917.2119143553005,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3920.333499540873 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_cv",
            "value": 0.008530768642130532,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008537653673812182 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_mean",
            "value": 148.23926525365718,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.23879277013222 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_median",
            "value": 148.25743195631568,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.2562390172127 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_stddev",
            "value": 3.0087394395408738,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.0074851542012264 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_cv",
            "value": 0.020296508043213236,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.020288111485532737 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_mean",
            "value": 143.41627074896962,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 143.4133389046523 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_median",
            "value": 143.4900303282112,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 143.48863390949435 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_stddev",
            "value": 1.099400882224579,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.0969049632762886 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_cv",
            "value": 0.007665803025578098,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007648556066361167 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_mean",
            "value": 147.8248998761483,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.8232945117999 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_median",
            "value": 147.65922592017338,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.65643561359022 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_stddev",
            "value": 0.5332233485672028,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5314217676299866 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_cv",
            "value": 0.003607128088799328,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003594979866908366 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_mean",
            "value": 146.09979052606133,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.0991884034287 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_median",
            "value": 145.99528154294794,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 145.99467307543026 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_stddev",
            "value": 0.6236155740902674,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6241355561200961 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_cv",
            "value": 0.004268422095916877,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00427199879027835 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_mean",
            "value": 144.8900351369424,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 144.88593101519928 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_median",
            "value": 145.6528738594278,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 145.6489300199414 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_stddev",
            "value": 3.814549459364434,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.812257952280548 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_cv",
            "value": 0.026327203632459082,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.026312133452630556 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_mean",
            "value": 144.95870376665087,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 144.9480199756299 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_median",
            "value": 144.97844088531846,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 144.9606135252676 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_stddev",
            "value": 2.2430474956901323,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2446218934408875 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_cv",
            "value": 0.015473700008389333,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015485702349147475 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_mean",
            "value": 142.8162487815572,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 142.8066707814792 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_median",
            "value": 142.9419605439771,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 142.93578770061995 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_stddev",
            "value": 1.0061108861877617,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.997432847520557 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_cv",
            "value": 0.007044792835349191,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006984497587278782 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_mean",
            "value": 141.7602361458189,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 141.76022891501594 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_median",
            "value": 141.77985209428678,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 141.78085095858057 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_stddev",
            "value": 1.5362984488572333,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.5361291268655408 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_cv",
            "value": 0.010837301704809165,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01083610783237686 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_mean",
            "value": 147.11911955755943,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.11324699960778 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_median",
            "value": 146.4339641197831,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.4306671602079 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_stddev",
            "value": 3.3612679422962697,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.3584643525066653 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_cv",
            "value": 0.02284725433651875,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.022829109009575594 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_mean",
            "value": 146.68402047189252,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.67824331522138 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_median",
            "value": 146.74370481049402,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.742190404478 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_stddev",
            "value": 0.19903666022683653,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2028584568306594 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_cv",
            "value": 0.0013569075867059137,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013830166781770284 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_mean",
            "value": 146.29772413175735,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.28396686662202 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_median",
            "value": 146.45434345867469,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.44784714679847 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_stddev",
            "value": 2.6575921629442516,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.666796222462024 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_cv",
            "value": 0.0181656425533373,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0182302700670781 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_mean",
            "value": 149.23246985236773,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.22686562848182 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_median",
            "value": 148.39372264452797,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.38627733092355 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_stddev",
            "value": 4.3779433907627565,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.375704352365713 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_cv",
            "value": 0.02933639974660847,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02932249721882891 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_mean",
            "value": 147.93541841128862,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.89925051806352 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_median",
            "value": 147.4589011811038,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.36543561811476 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_stddev",
            "value": 1.3609920227040246,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.3751247203761687 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_cv",
            "value": 0.009199906535703356,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009297712568247391 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_mean",
            "value": 150.77070126468044,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.76426768694478 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_median",
            "value": 152.6442491114308,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.64061706732545 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_stddev",
            "value": 4.948258444131808,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.950358779656802 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_cv",
            "value": 0.03281976141667643,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.032835093192877765 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_mean",
            "value": 145.27637585995078,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 145.2721151554499 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_median",
            "value": 144.8222384899697,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 144.81484178736937 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_stddev",
            "value": 3.8661888967176257,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.8660699729394747 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_cv",
            "value": 0.026612646920960548,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0266126088189915 ns\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_mean",
            "value": 0.0018394132629317472,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0018393290180867868 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_median",
            "value": 0.0018462502204423575,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0018461924041863077 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_stddev",
            "value": 0.0000462138351191962,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.000046233572431012364 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_cv",
            "value": 0.02512422632287555,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.025136107774292114 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_mean",
            "value": 0.013664127720648839,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.01366371049511115 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_median",
            "value": 0.013594295919755965,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.01359395775907319 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_stddev",
            "value": 0.0001572845230541019,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00015763279789913232 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_cv",
            "value": 0.011510762067630414,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.011536602590894549 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_mean",
            "value": 0.02879656630572473,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.028795103295310653 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_median",
            "value": 0.029039863820465698,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029038881013391058 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_stddev",
            "value": 0.00046425877178235954,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0004647284330921667 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_cv",
            "value": 0.016122018398077736,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.01613914797686622 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_mean",
            "value": 0.1621560617343237,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.16214821659059953 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_median",
            "value": 0.16226955897189357,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.1622615954840242 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_stddev",
            "value": 0.004322403690774105,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.004321300756760083 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_cv",
            "value": 0.02665582553340452,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.02665031319876144 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_mean",
            "value": 0.32998017869579727,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.32995154036087504 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_median",
            "value": 0.3299931206077921,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3299813613485299 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_stddev",
            "value": 0.0032146042968249737,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00321064161937794 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_cv",
            "value": 0.009741810279424263,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.009730645948391068 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_mean",
            "value": 45.958011133332214,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 45.95447771111102 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_median",
            "value": 45.85408999999837,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 45.848859333333785 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_stddev",
            "value": 0.34361688687220543,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3425979502652836 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_cv",
            "value": 0.007476757118042224,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.007455159264761901 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_mean",
            "value": 236.34489455555277,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 236.3265366666667 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_median",
            "value": 235.86209066666206,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 235.83231799999757 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_stddev",
            "value": 2.1616906524042396,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 2.174286772846424 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_cv",
            "value": 0.009146339532611037,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.009200349666669924 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_mean",
            "value": 0.028469773851920104,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.028468532511703986 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_median",
            "value": 0.028462828938417752,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.028461962786602225 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_stddev",
            "value": 0.0005483317539331206,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0005477459279464014 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_cv",
            "value": 0.019260137322662265,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.019240399122125884 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_mean",
            "value": 0.16040735205371504,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.16040314557661783 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_median",
            "value": 0.16087625900473743,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.16087101611374527 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_stddev",
            "value": 0.0025407167285506744,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0025410294797559136 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_cv",
            "value": 0.015839153854368678,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.015841519009003293 ms\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_mean",
            "value": 397.25454909956244,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 397.2490963793951 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_median",
            "value": 397.5558741681598,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 397.55053112806553 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_stddev",
            "value": 3.7468085241869615,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.7442779881383483 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_cv",
            "value": 0.00943175737742883,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00942551669031955 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_mean",
            "value": 396.487655140334,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 396.4822485361108 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_median",
            "value": 398.7878619383343,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 398.77962849976115 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_stddev",
            "value": 4.7113190078340725,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.708719913711423 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_cv",
            "value": 0.011882637319859389,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011876243970813143 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_mean",
            "value": 396.2350709355098,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 396.2335456753351 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_median",
            "value": 397.84856981974076,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 397.8474846004655 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_stddev",
            "value": 5.335319036137676,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.337809671428303 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_cv",
            "value": 0.013465034842930495,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013471372451140181 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_mean",
            "value": 397.5537919147411,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 397.53764327756556 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_median",
            "value": 400.0833576117225,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 400.0624766885315 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_stddev",
            "value": 5.460822557521676,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.443795066558484 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_cv",
            "value": 0.01373605954359202,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013693785126047953 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_mean",
            "value": 394.2067033142933,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 394.19179815974553 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_median",
            "value": 394.11911364719305,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 394.09380930071893 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_stddev",
            "value": 0.5427151046232149,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5529720066420145 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_cv",
            "value": 0.0013767272348753513,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001402799371330206 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_mean",
            "value": 66891.83798848464,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 66888.49010780342 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_median",
            "value": 66872.51543550192,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 66870.8667769199 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_stddev",
            "value": 144.08718791753873,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 144.21153914626333 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_cv",
            "value": 0.002154032423841354,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002155999319372275 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_mean",
            "value": 308068.8214132827,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 308055.2618129844 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_median",
            "value": 308348.71605995385,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 308345.64411134564 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_stddev",
            "value": 5034.636398318943,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5030.440981278559 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_cv",
            "value": 0.016342570388078452,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.016329670695034132 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_mean",
            "value": 1660407.137540425,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1660347.714401285 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_median",
            "value": 1663745.0291261317,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1663659.463592237 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_stddev",
            "value": 19245.78963209985,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19286.886255010522 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_cv",
            "value": 0.011591006324273458,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011616172978541008 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_mean",
            "value": 7435791.268116037,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7435459.097826154 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_median",
            "value": 7363398.652174168,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7363269.521739206 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_stddev",
            "value": 139287.8603118794,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 139184.7725720504 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_cv",
            "value": 0.01873208314885498,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.018719055641465733 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_mean",
            "value": 24907453.5925931,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24906252.716048997 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_median",
            "value": 24977497.74073975,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24975472.074073773 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_stddev",
            "value": 703870.8775765783,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 703591.6969505028 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_cv",
            "value": 0.02825944751678241,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.028249600811973016 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_mean",
            "value": 622.7113585742196,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 622.6856962231938 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_median",
            "value": 622.8619739645542,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 622.8331679452846 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_stddev",
            "value": 2.474960004777132,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.460540394629095 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_cv",
            "value": 0.003974489899210899,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003951496572914926 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_mean",
            "value": 2434.148753979302,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2434.063201626765 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_median",
            "value": 2422.1838222235388,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2422.0751745385323 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_stddev",
            "value": 33.77867576501894,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 33.722898392911475 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_cv",
            "value": 0.013876997332146679,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013854569745918408 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_mean",
            "value": 9756.70321917477,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9756.23607431845 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_median",
            "value": 9696.488595454468,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9696.043376669026 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_stddev",
            "value": 205.22771755470274,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 205.39159458790007 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_cv",
            "value": 0.0210345352261377,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.021052339552192344 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_mean",
            "value": 39338.43716612403,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 39336.5393739026 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_median",
            "value": 39508.22481228225,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 39505.70951473709 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_stddev",
            "value": 651.1225861729598,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 650.5074937810069 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_cv",
            "value": 0.016551816317036325,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0165369781921533 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_mean",
            "value": 163915.81189320527,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 163908.2411812285 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_median",
            "value": 162393.06067960887,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 162382.51043688756 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_stddev",
            "value": 3110.8771019562228,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3106.969252184948 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_cv",
            "value": 0.01897850528284012,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.018955540183910973 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_mean",
            "value": 648532.5645471882,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 648510.2209377119 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_median",
            "value": 655480.9460500712,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 655465.7206165859 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_stddev",
            "value": 12511.352120345216,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12503.623819974579 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_cv",
            "value": 0.01929178703475093,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0192805347028995 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_mean",
            "value": 729.0619488445795,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 729.0347339620075 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_median",
            "value": 727.9236186377628,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 727.8810373211978 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_stddev",
            "value": 13.203542193569682,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.223607560116065 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_cv",
            "value": 0.018110315885357497,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.018138515140768578 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_mean",
            "value": 2788.7293025344134,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2788.6082398073595 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_median",
            "value": 2791.009219279223,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2790.9213280006393 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_stddev",
            "value": 29.423027404043648,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 29.383222503245708 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_cv",
            "value": 0.010550693241292307,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010536877171845245 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_mean",
            "value": 11226.772628686884,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11226.268239519313 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_median",
            "value": 11214.353697122788,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11214.178876827556 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_stddev",
            "value": 74.37534277054465,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 74.24113717452289 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_cv",
            "value": 0.006624819547917023,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006613162592461068 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_mean",
            "value": 44875.831419888294,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 44873.931181526284 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_median",
            "value": 44814.625664242914,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 44813.50416584808 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_stddev",
            "value": 172.17406444034725,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 171.46467904044252 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_cv",
            "value": 0.0038366768702148735,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003821030931005909 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_mean",
            "value": 186396.12511076315,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 186393.08497253314 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_median",
            "value": 186541.90111643658,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 186540.1820840017 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_stddev",
            "value": 400.4151924761561,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 400.93868980374185 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_cv",
            "value": 0.002148194830972024,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0021510384350515153 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_mean",
            "value": 746289.3315881406,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 746274.7930191815 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_median",
            "value": 747349.5581152104,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 747330.4963350613 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_stddev",
            "value": 2887.223698004418,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2890.767458719821 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_cv",
            "value": 0.003868772573581165,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0038735965434725864 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_mean",
            "value": 14.07601733895144,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.075308142269009 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_median",
            "value": 14.042670694752788,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.042294142715903 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_stddev",
            "value": 0.1492407013080996,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.1494161855885575 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_cv",
            "value": 0.010602480638832243,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010615482380797873 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_mean",
            "value": 13.832994905572583,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.832641443495904 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_median",
            "value": 13.815862686861182,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.815248776996135 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_stddev",
            "value": 0.05627191679955715,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05650782781151583 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_cv",
            "value": 0.004067948928173765,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004085107536571459 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_mean",
            "value": 13.988704744360604,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.988609772587246 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_median",
            "value": 13.980133687836167,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.980064109894007 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_stddev",
            "value": 0.2492817475279034,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.24935861751873764 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_cv",
            "value": 0.017820216530654753,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01782583270050129 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_mean",
            "value": 13.849420655009752,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.849048247966586 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_median",
            "value": 13.890219503485342,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.889843325857711 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_stddev",
            "value": 0.10380912144238706,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.10399925688618811 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_cv",
            "value": 0.007495556964315053,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007509487657497187 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_mean",
            "value": 13.756586040195636,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.7564005456718 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_median",
            "value": 13.722133199959712,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.721927563007078 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_stddev",
            "value": 0.06748286425656784,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06752614786060422 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_cv",
            "value": 0.00490549501594279,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004908707596614006 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_mean",
            "value": 14.025550782118723,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.025286581460344 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_median",
            "value": 13.974900135758071,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.974683494897569 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_stddev",
            "value": 0.10140543470668632,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.10151269659959224 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_cv",
            "value": 0.007230050090864798,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007237834037115446 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "committer": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "id": "a63054e2008df1babcd7b21369f923258bf839b1",
          "message": "Post-process data.js to add tag info to benchmark entries\n\nReplace the marker commit approach with direct data.js modification.\nAfter benchmark-action pushes to gh-pages, update the most recent\nentry's commit.message to include \"Benchmark: vX.Y.Z\" prefix.\n\nThis ensures the custom dashboard can display tags instead of hashes.\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-20T16:02:49Z",
          "url": "https://github.com/zalo/manifold-benchmarks/commit/a63054e2008df1babcd7b21369f923258bf839b1"
        },
        "date": 1768924988588,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SphereCreation/16_mean",
            "value": 43584.58562881746,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43582.125721882905 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_median",
            "value": 43305.90090988418,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43306.26854044621 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_stddev",
            "value": 544.8776308732866,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 546.3338816555148 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_cv",
            "value": 0.012501613196777115,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012535732771318137 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_mean",
            "value": 175854.37156236835,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 175302.76900808865 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_median",
            "value": 177454.7810983409,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 176884.4776500639 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_stddev",
            "value": 3061.719171661473,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3061.9252569248238 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_cv",
            "value": 0.01741053773335175,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.017466496817192565 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_mean",
            "value": 1056361.167673696,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1056330.8867069487 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_median",
            "value": 1056765.6963746033,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1056747.6706948644 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_stddev",
            "value": 834.5026571227468,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 824.103548703422 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_cv",
            "value": 0.0007899785439486356,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007801566337537643 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_mean",
            "value": 3523945.5454545678,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3523581.2643097634 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_median",
            "value": 3525798.84343435,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3525480.9242424215 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_stddev",
            "value": 6945.080414791071,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7222.209775281772 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_cv",
            "value": 0.0019708251234895847,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0020496787880090327 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_mean",
            "value": 8938170.219409144,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8937797.810126591 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_median",
            "value": 8949979.341772003,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8949692.379746845 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_stddev",
            "value": 26761.517671715872,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26918.221665080902 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_cv",
            "value": 0.0029940711593972017,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0030117286424383377 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_mean",
            "value": 30555008.71014464,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30553444.84057973 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_median",
            "value": 30620992.21739098,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30620509.565217447 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_stddev",
            "value": 125888.89066395804,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 124913.97933645816 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_cv",
            "value": 0.004120073794060525,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0040883762858240115 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_mean",
            "value": 4302.992003697455,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4302.715562726999 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_median",
            "value": 4301.792977569433,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4301.2519939628955 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_stddev",
            "value": 3.996995275423863,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.095405806512739 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_cv",
            "value": 0.0009288874513337098,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009518188564426343 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_mean",
            "value": 4325.3583389879595,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4325.209392799128 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_median",
            "value": 4326.290191845062,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4326.20122139288 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_stddev",
            "value": 2.4570552436538216,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.4052997098909477 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_cv",
            "value": 0.000568058193353922,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005561117373636146 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_mean",
            "value": 4324.351209350673,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4324.149917539592 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_median",
            "value": 4325.501801379401,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4325.181797431192 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_stddev",
            "value": 6.262357935403465,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.29413148647457 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_cv",
            "value": 0.0014481612691083423,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014555766119357587 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_mean",
            "value": 19454.550150483945,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19453.299152660067 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_median",
            "value": 19442.665620225263,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19441.21522433666 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_stddev",
            "value": 21.0070113805676,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 21.394166231070304 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_cv",
            "value": 0.0010797993897610136,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010997705871471598 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_mean",
            "value": 37637.73341928102,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 37635.99736785553 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_median",
            "value": 37585.553341211875,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 37584.54490760633 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_stddev",
            "value": 95.57575925407603,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 95.02817138118739 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_cv",
            "value": 0.002539360120052143,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0025249276763514134 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_mean",
            "value": 76307.6254527029,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 76303.15055048522 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_median",
            "value": 76154.77694480719,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 76150.9332898738 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_stddev",
            "value": 314.21754200988755,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 313.5293708999668 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_cv",
            "value": 0.004117773815470727,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004108996399729566 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_mean",
            "value": 154563.4007664534,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 154556.04178642525 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_median",
            "value": 154615.02476232633,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 154604.1403935441 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_stddev",
            "value": 92.64026269075889,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 88.32704789146261 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_cv",
            "value": 0.0005993673937773865,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005714888067172305 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_mean",
            "value": 429322.56912585226,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 429291.8906798921 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_median",
            "value": 426864.50278982363,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 426833.7278363295 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_stddev",
            "value": 5232.858644614783,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5218.8389437045325 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_cv",
            "value": 0.01218864094489478,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012156854245346179 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_mean",
            "value": 254.6265673087278,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 254.61367786593982 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_median",
            "value": 255.38482641012789,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 255.38266496426047 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_stddev",
            "value": 2.9377907713740705,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.9356595736427082 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_cv",
            "value": 0.011537644333130717,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011529858090296323 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_mean",
            "value": 259.7691450339293,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 259.754257471495 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_median",
            "value": 257.3709053427033,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 257.3535839474785 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_stddev",
            "value": 4.436172381556323,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.433250805907274 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_cv",
            "value": 0.01707736452293786,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.017067095835354196 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_mean",
            "value": 258.698177230355,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 258.69001410753737 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_median",
            "value": 257.1693546216222,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 257.1525749237855 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_stddev",
            "value": 2.977516373693751,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.9834291254159204 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_cv",
            "value": 0.011509614816661247,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011532834522849847 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_mean",
            "value": 259.9362335833122,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 259.93163291186096 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_median",
            "value": 261.5581506430669,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 261.5544130713768 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_stddev",
            "value": 2.977856448944911,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.9748464441028744 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_cv",
            "value": 0.011456103706259475,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011444726487412947 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_mean",
            "value": 260.28525137759334,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 260.2796205714642 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_median",
            "value": 259.25825158930996,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 259.24971771845935 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_stddev",
            "value": 1.9577850584302086,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.9571902005374744 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_cv",
            "value": 0.0075216903303909,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007519567595189784 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_mean",
            "value": 261.61028972680003,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 261.6053393856805 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_median",
            "value": 258.8440991439326,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 258.8401555688577 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_stddev",
            "value": 6.358678862034837,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.362184130972794 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_cv",
            "value": 0.02430592033927723,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.024319779351265947 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_mean",
            "value": 260.3434464425555,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 260.33583569229967 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_median",
            "value": 257.85541863410765,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 257.8529088086983 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_stddev",
            "value": 4.750557819678334,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.7424809854471635 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_cv",
            "value": 0.018247272534000738,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.018216781308019667 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_mean",
            "value": 259.0863894157862,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 259.08139502649635 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_median",
            "value": 257.46830640001366,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 257.4614474691025 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_stddev",
            "value": 3.0649733518444866,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.0672733405637262 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_cv",
            "value": 0.011829928074399025,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011839033598881287 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_mean",
            "value": 261.10665324374924,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 261.0885986083668 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_median",
            "value": 260.4490483141363,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 260.4284046834663 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_stddev",
            "value": 4.391766751042987,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.3919592657022 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_cv",
            "value": 0.0168198193974903,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.016821719864872936 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_mean",
            "value": 259.14659643546037,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 259.1175096603418 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_median",
            "value": 257.4595272289131,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 257.4461371551213 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_stddev",
            "value": 3.45577537337577,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.4567873656851957 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_cv",
            "value": 0.01333521420273185,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01334061665773357 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_mean",
            "value": 252.603916311083,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.58049928181663 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_median",
            "value": 252.09082103020933,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.08125847675043 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_stddev",
            "value": 0.9870428068935381,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.9928436609785835 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_cv",
            "value": 0.003907472304103116,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003930800928027379 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_mean",
            "value": 252.88832545380606,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.87539169562106 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_median",
            "value": 253.01670618435546,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 253.00214490265253 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_stddev",
            "value": 0.36332902518810656,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3680027999758459 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_cv",
            "value": 0.0014367172724803156,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014552732771198251 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_mean",
            "value": 253.48897575074918,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 253.4792606533775 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_median",
            "value": 253.64988813142182,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 253.64184069957082 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_stddev",
            "value": 0.511435136580947,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5178960279175372 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_cv",
            "value": 0.0020175833488073713,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0020431495128342626 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_mean",
            "value": 255.3687179072515,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 255.36005057827086 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_median",
            "value": 253.35799156419793,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 253.35132717421837 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_stddev",
            "value": 4.177883868535656,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.177984503221017 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_cv",
            "value": 0.01636020223139876,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.016361151612242556 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_mean",
            "value": 252.62326255235178,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.61597246740973 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_median",
            "value": 252.07825726108794,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.07489354779713 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_stddev",
            "value": 0.9872165591580369,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.9860041764422093 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_cv",
            "value": 0.003907860856453999,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003903174319547094 ns\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_mean",
            "value": 0.004033466370992065,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.004033234665855949 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_median",
            "value": 0.004029431112594753,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.004028962611474086 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_stddev",
            "value": 0.000024228169341024123,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.000024184771343836765 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_cv",
            "value": 0.006006786003044077,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.005996370989413823 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_mean",
            "value": 0.01934611162738933,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.01934549340122226 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_median",
            "value": 0.01933171575637812,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.019331578448011835 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_stddev",
            "value": 0.00007018237553057434,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00007025124441379343 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_cv",
            "value": 0.003627725140963901,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0036314010171151763 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_mean",
            "value": 0.038746871636532475,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.03874571523412149 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_median",
            "value": 0.038737982642559725,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.03873715777468683 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_stddev",
            "value": 0.00007825607635577231,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00007789689569374861 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_cv",
            "value": 0.0020196747001889207,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.002010464775861165 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_mean",
            "value": 0.20850780357322027,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.2084893371474471 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_median",
            "value": 0.20902527582052896,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.20902031887985548 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_stddev",
            "value": 0.001396031266507879,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0014180366755423177 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_cv",
            "value": 0.00669534301634732,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.006801482967637135 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_mean",
            "value": 0.5268330867895462,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.5268063614951417 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_median",
            "value": 0.5234363963133596,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.523406917050698 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_stddev",
            "value": 0.02390248494041991,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.02391005647078712 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_cv",
            "value": 0.04537012867980371,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.04538680285281184 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_mean",
            "value": 48.4157757142855,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 48.41453130952374 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_median",
            "value": 48.36359835714379,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 48.361953571427655 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_stddev",
            "value": 0.10412147893724953,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.10378304952071343 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_cv",
            "value": 0.0021505692597325785,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0021436342914735187 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_mean",
            "value": 243.32527822221866,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 243.2279 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_median",
            "value": 243.40376799998845,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 243.3743183333282 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_stddev",
            "value": 0.3784488797093258,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.27659416847522206 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_cv",
            "value": 0.001555320854760123,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0011371810901431212 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_mean",
            "value": 0.0388517230202575,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.038851403793738054 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_median",
            "value": 0.03889147005524833,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.03889129900552455 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_stddev",
            "value": 0.00012864597720035719,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00012887974643426364 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_cv",
            "value": 0.003311203910654888,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0033172481261806055 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_mean",
            "value": 0.20035317497837868,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.20034726289997132 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_median",
            "value": 0.20067078235803223,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.20066698039780886 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_stddev",
            "value": 0.0005770591148735448,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0005782297220856219 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_cv",
            "value": 0.002880209484755202,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0028861373682670093 ms\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_mean",
            "value": 497.63232512179053,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 497.62765673272196 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_median",
            "value": 497.4181220211214,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 497.4219906983737 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_stddev",
            "value": 0.37770701112227717,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.37915185082779385 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_cv",
            "value": 0.0007590081914992906,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007619187673715611 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_mean",
            "value": 498.8422746666666,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 498.8249069999995 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_median",
            "value": 497.4675360000447,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 497.44662899999526 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_stddev",
            "value": 2.4223228273774784,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.4217857835818277 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_cv",
            "value": 0.004855889226702184,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004854981677131511 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_mean",
            "value": 498.6544761641342,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 498.64777838611695 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_median",
            "value": 498.43262584265557,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 498.4303980027076 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_stddev",
            "value": 0.531229748216515,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5234356595125319 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_cv",
            "value": 0.0010653263404010007,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010497102006683783 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_mean",
            "value": 500.32305169322586,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 500.31504429689517 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_median",
            "value": 498.3049257971866,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 498.3046419613285 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_stddev",
            "value": 3.550616535278381,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.5467821892740363 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_cv",
            "value": 0.007096647902314621,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007089097618998077 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_mean",
            "value": 497.7955720360226,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 497.78922010562945 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_median",
            "value": 498.1258439090231,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 498.12002768071335 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_stddev",
            "value": 0.5976455524721337,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5990963352962342 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_cv",
            "value": 0.0012005843081884335,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001203514080054019 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_mean",
            "value": 68657.59824698915,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 68641.53895211958 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_median",
            "value": 68616.69299450408,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 68616.60655416096 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_stddev",
            "value": 206.90220929317672,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 182.57080318173055 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_cv",
            "value": 0.003013536951130533,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002659771414931147 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_mean",
            "value": 371278.9183457168,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 371269.17603393225 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_median",
            "value": 371044.0328738256,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 371027.37168611377 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_stddev",
            "value": 563.1096458937692,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 569.4290918620673 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_cv",
            "value": 0.0015166755182405185,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015337365141511886 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_mean",
            "value": 1760800.5591939993,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1760783.6112510609 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_median",
            "value": 1760406.0226700203,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1760350.7078085646 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_stddev",
            "value": 757.1409191457998,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 780.8238429554352 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_cv",
            "value": 0.0004299981137513829,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00044345247080113906 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_mean",
            "value": 7883545.808988444,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7883358.865168585 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_median",
            "value": 7863238.415730142,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7863097.61797754 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_stddev",
            "value": 77883.34571676656,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78066.79802906504 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_cv",
            "value": 0.009879227901227855,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00990273300559629 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_mean",
            "value": 30116091.652173772,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30115424.956521112 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_median",
            "value": 30214180.260869574,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30214323.956520814 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_stddev",
            "value": 277918.7513329258,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 277358.47672524967 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_cv",
            "value": 0.00922824762730677,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009209847681900009 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_mean",
            "value": 627.4884248694563,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 627.4783459599377 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_median",
            "value": 627.4894548636685,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 627.4845644046201 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_stddev",
            "value": 0.10226549239748582,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.10235415679772213 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_cv",
            "value": 0.00016297590257343997,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00016311982310901463 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_mean",
            "value": 2415.0072707264985,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2414.9894466162837 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_median",
            "value": 2417.0639006167294,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2417.0430614195798 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_stddev",
            "value": 3.789116777445937,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.7481244400427607 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_cv",
            "value": 0.0015689877307516634,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015520251839172107 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_mean",
            "value": 9704.85682000953,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9704.832362809511 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_median",
            "value": 9704.86366913501,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9704.819108227271 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_stddev",
            "value": 4.303375966689825,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.329161437796002 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_cv",
            "value": 0.0004434249826145914,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004460830724275105 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_mean",
            "value": 38745.30663640996,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38744.68572535627 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_median",
            "value": 38740.351192783106,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38739.54458404966 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_stddev",
            "value": 8.736387788846061,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.04133695330471 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_cv",
            "value": 0.00022548247897040142,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00023335682775683608 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_mean",
            "value": 169404.06634832764,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 169401.0056965732 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_median",
            "value": 169504.69866800366,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 169494.10957527102 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_stddev",
            "value": 337.1114931679304,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 334.29877550049406 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_cv",
            "value": 0.0019899846587788732,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0019734167109921505 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_mean",
            "value": 687874.9392655543,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 687849.6843220369 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_median",
            "value": 687083.6980932459,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 687044.8760592968 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_stddev",
            "value": 5212.060006182505,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5214.804019990083 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_cv",
            "value": 0.007577045926033347,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0075813133869937505 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_mean",
            "value": 697.054026226389,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 697.0361910873934 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_median",
            "value": 697.1439653086971,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 697.1345877408745 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_stddev",
            "value": 0.8566600584634226,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.8534569768531349 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_cv",
            "value": 0.0012289722549930393,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012244084134594524 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_mean",
            "value": 2700.6826209637306,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2700.625767850425 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_median",
            "value": 2701.360825339371,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2701.3479810618173 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_stddev",
            "value": 6.494285221584984,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.5259997473025235 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_cv",
            "value": 0.002404682864685343,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002416476886576151 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_mean",
            "value": 10867.02474174514,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10866.624332055635 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_median",
            "value": 10867.967674854679,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10867.661369667398 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_stddev",
            "value": 5.217062920013714,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.1510051650679936 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_cv",
            "value": 0.00048008199521002516,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004740207269218792 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_mean",
            "value": 43403.23143329126,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43401.80336637784 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_median",
            "value": 43423.95681536613,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43422.688475837065 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_stddev",
            "value": 45.55566803051622,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 45.82077064433931 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_cv",
            "value": 0.0010495916208573815,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001055734257342758 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_mean",
            "value": 187407.38839644942,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 187399.58169934526 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_median",
            "value": 187385.14611871587,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 187372.94493688198 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_stddev",
            "value": 71.03462608149226,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 69.14897551477176 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_cv",
            "value": 0.00037903855706703866,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00036899215509301943 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_mean",
            "value": 756854.2855007424,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 756817.1707772795 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_median",
            "value": 756356.3217488668,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 756326.0168161412 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_stddev",
            "value": 1079.0437054185543,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1076.3269867285326 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_cv",
            "value": 0.001425695442425418,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001422175696176534 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_mean",
            "value": 32.73789430340806,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.73673615745018 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_median",
            "value": 32.747585000249636,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.74735029971493 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_stddev",
            "value": 0.025021741962528002,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0250197822412558 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_cv",
            "value": 0.0007643051727955272,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007642723489880293 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_mean",
            "value": 32.804724585641445,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.80333725956256 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_median",
            "value": 32.83339154963236,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.83206991266843 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_stddev",
            "value": 0.05141315841191965,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05105418305916153 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_cv",
            "value": 0.0015672485918209193,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015563716171676596 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_mean",
            "value": 32.89667530406029,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.895774807613755 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_median",
            "value": 32.7526356398624,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.75228826341011 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_stddev",
            "value": 0.25473197776330997,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2544785983458044 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_cv",
            "value": 0.007743395811547846,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007735905289785275 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_mean",
            "value": 32.795522648984836,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.7944685669727 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_median",
            "value": 32.79502050528086,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.79418651198535 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_stddev",
            "value": 0.0510264430126273,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05172363315169436 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_cv",
            "value": 0.0015558966252427384,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015772060171081786 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_mean",
            "value": 32.77613466000003,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.77527004352015 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_median",
            "value": 32.741927618945226,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.74059328044817 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_stddev",
            "value": 0.06215771967513336,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0615084721452552 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_cv",
            "value": 0.001896432276713538,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0018766732375837666 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_mean",
            "value": 32.769872129707245,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.76875173770723 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_median",
            "value": 32.769678155958644,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.769232159972724 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_stddev",
            "value": 0.00911121110967864,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009645876834827498 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_cv",
            "value": 0.00027803621184774026,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0002943620468682035 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "committer": {
            "name": "Johnathon Selstad",
            "username": "zalo",
            "email": "makeshifted@gmail.com"
          },
          "id": "a63054e2008df1babcd7b21369f923258bf839b1",
          "message": "Post-process data.js to add tag info to benchmark entries\n\nReplace the marker commit approach with direct data.js modification.\nAfter benchmark-action pushes to gh-pages, update the most recent\nentry's commit.message to include \"Benchmark: vX.Y.Z\" prefix.\n\nThis ensures the custom dashboard can display tags instead of hashes.\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-20T16:02:49Z",
          "url": "https://github.com/zalo/manifold-benchmarks/commit/a63054e2008df1babcd7b21369f923258bf839b1"
        },
        "date": 1768925385722,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SphereCreation/16_mean",
            "value": 45205.31638820441,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 45198.39137849156 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_median",
            "value": 45081.26751716095,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 45077.5795233778 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_stddev",
            "value": 414.9358817109885,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 415.00829219262613 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_cv",
            "value": 0.009178917765947972,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009181926160100357 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_mean",
            "value": 192850.12851296074,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 191686.03592542058 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_median",
            "value": 190341.7882673964,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 189218.33424283765 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_stddev",
            "value": 5521.941544215716,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5356.32320744257 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_cv",
            "value": 0.02863333090205645,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.027943210268725874 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_mean",
            "value": 1136599.6250000037,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1136524.3149350646 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_median",
            "value": 1137013.91558438,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1136992.8376623376 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_stddev",
            "value": 1292.2237363564936,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1245.0108649357974 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_cv",
            "value": 0.001136920783654569,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010954546669834611 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_mean",
            "value": 3790418.6630629865,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3790269.0432432443 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_median",
            "value": 3793822.1135134795,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3793721.740540536 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_stddev",
            "value": 16068.744574709177,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 16020.769089741852 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_cv",
            "value": 0.0042393059983838926,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004226815803036836 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_mean",
            "value": 9917378.55238103,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9917096.276190484 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_median",
            "value": 9906339.22857163,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9906187.200000005 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_stddev",
            "value": 28358.44695947618,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 28096.445285025122 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_cv",
            "value": 0.0028594700514550492,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0028331322498583206 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_mean",
            "value": 30762818.46376844,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30761664.260869548 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_median",
            "value": 30632665.217390936,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30631419.173913065 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_stddev",
            "value": 249272.35883664922,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 249236.54658465274 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_cv",
            "value": 0.008103040335209696,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008102180183459538 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_mean",
            "value": 4241.217400373492,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4240.926609071804 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_median",
            "value": 4243.831419579914,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4243.245270294894 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_stddev",
            "value": 6.638381397870382,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.569197522969312 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_cv",
            "value": 0.0015652065836770806,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015490005200554718 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_mean",
            "value": 4240.14321929566,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4239.772497729331 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_median",
            "value": 4241.6171541022895,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4241.439019073568 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_stddev",
            "value": 6.597595978749449,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.803324066527222 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_cv",
            "value": 0.0015559842291943597,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016046436619348884 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_mean",
            "value": 4238.405531311421,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4238.3130515871 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_median",
            "value": 4239.499676971069,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4239.392413086923 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_stddev",
            "value": 5.476371525721561,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.4880646643401745 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_cv",
            "value": 0.0012920829508324787,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001294870057388773 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_mean",
            "value": 19088.246700322623,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19087.45958975757 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_median",
            "value": 19094.73428844298,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19094.174757811386 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_stddev",
            "value": 11.670142548909837,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.865532189958396 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_cv",
            "value": 0.0006113784430873156,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006216401996379605 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_mean",
            "value": 38505.148743644495,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38503.42598608742 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_median",
            "value": 38510.23891856215,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38508.08727492979 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_stddev",
            "value": 48.165971218214764,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 47.32810675324575 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_cv",
            "value": 0.0012508969005389143,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001229192092421775 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_mean",
            "value": 78899.01300940951,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78877.71615491332 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_median",
            "value": 78762.70374535974,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78758.93386570712 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_stddev",
            "value": 292.84299798936775,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 261.94384326116716 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_cv",
            "value": 0.0037116180142132225,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0033208852389528852 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_mean",
            "value": 159856.36851725003,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 159849.74206077206 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_median",
            "value": 159827.28672606603,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 159822.29380854426 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_stddev",
            "value": 347.5954901800819,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 344.32607231435054 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_cv",
            "value": 0.0021744237868294436,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002154060856622739 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_mean",
            "value": 468659.6437165825,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 468645.85249554267 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_median",
            "value": 467406.4872994661,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 467388.39973261836 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_stddev",
            "value": 2264.6248345180534,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2277.3026080745044 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_cv",
            "value": 0.004832131088905032,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0048593252152939175 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_mean",
            "value": 149.3491864148334,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.34549216148622 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_median",
            "value": 149.40215184255652,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.39866858871562 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_stddev",
            "value": 0.11328792151140092,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.11350715567613472 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_cv",
            "value": 0.000758543948118549,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007600306780830065 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_mean",
            "value": 151.15685813930477,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.10153627433428 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_median",
            "value": 151.19789955453047,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.0904463076226 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_stddev",
            "value": 0.11750732279034186,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.08943975352522608 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_cv",
            "value": 0.0007773866448193054,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005919182275079098 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_mean",
            "value": 151.9158322763417,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.91093714266802 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_median",
            "value": 151.26277242192813,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.25534554901958 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_stddev",
            "value": 1.6525179175506228,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.6546435914815094 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_cv",
            "value": 0.010877851852495657,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010892195273126 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_mean",
            "value": 151.05734369344893,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.05153180736312 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_median",
            "value": 151.0832465863952,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.07836533852657 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_stddev",
            "value": 0.20284456438614096,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.20560467657745862 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_cv",
            "value": 0.001342831532889837,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013611558526905074 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_mean",
            "value": 150.16814932984144,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.1592724800265 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_median",
            "value": 150.52737713613075,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.51987635660484 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_stddev",
            "value": 1.6100117590494571,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.6125172435320183 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_cv",
            "value": 0.010721393093239084,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01073871241448981 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_mean",
            "value": 146.2978397035831,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.29289371605154 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_median",
            "value": 146.3029107505121,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.29606500464703 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_stddev",
            "value": 0.2307537723848564,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.23075847042813213 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_cv",
            "value": 0.001577287626750956,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015773730669107196 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_mean",
            "value": 146.48099900522877,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.47188762681955 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_median",
            "value": 146.18902643840326,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.18220609241968 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_stddev",
            "value": 0.5530830348851637,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5577675744244541 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_cv",
            "value": 0.0037758005382351393,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0038080179306866847 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_mean",
            "value": 148.08227879325915,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.07433154997747 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_median",
            "value": 148.4296527586193,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.41904638967196 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_stddev",
            "value": 0.9357938403545623,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.931972824004946 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_cv",
            "value": 0.0063194181503719565,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006293952599680587 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_mean",
            "value": 147.16277361452333,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.15253617657356 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_median",
            "value": 147.29405364676867,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.29071117103663 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_stddev",
            "value": 0.33773643271922893,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.343470441802084 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_cv",
            "value": 0.0022949855077065364,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0023341116009712643 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_mean",
            "value": 146.94221575468578,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.91592753659668 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_median",
            "value": 146.90221613211855,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.88336317811297 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_stddev",
            "value": 0.17650247174754874,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.16851167211762227 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_cv",
            "value": 0.0012011692544653925,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011469938960542321 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_mean",
            "value": 147.2631105678822,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.24718699305885 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_median",
            "value": 146.2319840690173,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.2249721526262 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_stddev",
            "value": 1.9315080916285907,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.9243135148494463 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_cv",
            "value": 0.01311603485883347,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013068592712335873 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_mean",
            "value": 150.06332186107412,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.0526090212465 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_median",
            "value": 149.82941388776663,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.8124650071786 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_stddev",
            "value": 0.4597670240936029,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.45874291553627744 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_cv",
            "value": 0.0030638201153460193,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003057213856716896 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_mean",
            "value": 149.68859177441553,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.67757584372723 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_median",
            "value": 150.4724878135883,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.46707616624377 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_stddev",
            "value": 1.668993628041908,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.6748548462049395 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_cv",
            "value": 0.011149771724468646,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011189751282139903 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_mean",
            "value": 149.92917098399545,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.91968086353538 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_median",
            "value": 150.692333193812,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.6845958807533 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_stddev",
            "value": 1.494982352387126,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.5015637999859983 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_cv",
            "value": 0.009971257378237031,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010015788396406735 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_mean",
            "value": 147.59713773285515,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.58857513663943 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_median",
            "value": 147.85648096830016,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.85089466588855 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_stddev",
            "value": 1.072649762468073,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.071395553476535 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_cv",
            "value": 0.007267415743586611,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007259339366103527 ns\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_mean",
            "value": 0.0019280131573527878,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00192788660863053 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_median",
            "value": 0.0019126403594495129,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.001912601738275752 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_stddev",
            "value": 0.00004437441737352826,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.000044407175105502394 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_cv",
            "value": 0.023015619579305924,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.023034121875584235 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_mean",
            "value": 0.013910536037644918,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.013909639007345423 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_median",
            "value": 0.013970311198874522,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.013968894355397617 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_stddev",
            "value": 0.00016429136581935167,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0001645323068773649 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_cv",
            "value": 0.011810570446368402,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.011828653985231285 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_mean",
            "value": 0.029547405782284337,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.02954355244099835 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_median",
            "value": 0.029512892647183684,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029508607395415967 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_stddev",
            "value": 0.00006362402966989663,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0000627996547696067 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_cv",
            "value": 0.002153286489470542,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.002125663624746021 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_mean",
            "value": 0.17917806823063842,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.17915154137664369 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_median",
            "value": 0.17930180123742312,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.17926200696055772 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_stddev",
            "value": 0.0011322366239631405,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0011179023905059924 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_cv",
            "value": 0.006319058103169875,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0062399819834971035 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_mean",
            "value": 0.3606572176835586,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3606307051016801 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_median",
            "value": 0.3590794120992891,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3590597466390833 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_stddev",
            "value": 0.003703176540329436,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.003706003489751123 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_cv",
            "value": 0.010267856454154236,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.010276450222690308 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_mean",
            "value": 49.27347330952546,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 49.26957821428635 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_median",
            "value": 49.3239718571447,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 49.322184142858255 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_stddev",
            "value": 0.11690886613389218,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.11638091461149208 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_cv",
            "value": 0.0023726532408116555,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0023621252470504396 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_mean",
            "value": 246.82715277777507,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 246.82145188888663 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_median",
            "value": 247.03198600000556,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 247.02854999999127 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_stddev",
            "value": 0.402751671501728,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.39730236530394075 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_cv",
            "value": 0.0016317154209704629,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.001609675181243149 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_mean",
            "value": 0.029266188292035575,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.02926491373896772 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_median",
            "value": 0.029179159071622676,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029177477342158684 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_stddev",
            "value": 0.00022490148468507341,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0002253279687994953 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_cv",
            "value": 0.007684686589209075,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.007699594497675203 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_mean",
            "value": 0.1784522999316578,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.17844614377242374 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_median",
            "value": 0.17809589569452397,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.17808984469502476 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_stddev",
            "value": 0.0009042402103385557,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0009016923609761547 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_cv",
            "value": 0.005067125560639197,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.005053022396079921 ms\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_mean",
            "value": 416.1905891294037,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 416.1850360534861 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_median",
            "value": 415.5878396457006,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 415.5757826219992 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_stddev",
            "value": 1.1056066132180322,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.1053386046593667 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_cv",
            "value": 0.0026564911415483073,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0026558826216839613 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_mean",
            "value": 415.9775738932817,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 415.9669112053942 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_median",
            "value": 416.11441587569107,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 416.11584263187166 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_stddev",
            "value": 0.3573839389674658,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3625390137892183 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_cv",
            "value": 0.0008591423225598021,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008715573379109606 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_mean",
            "value": 416.49090541644995,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 416.4784932015744 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_median",
            "value": 416.52881670257483,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 416.52455843672436 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_stddev",
            "value": 0.18511508078492525,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.18624041212985376 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_cv",
            "value": 0.0004444636806650757,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004471789424183158 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_mean",
            "value": 416.3241437367894,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 416.3116462900705 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_median",
            "value": 416.2128435017781,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 416.2033572299676 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_stddev",
            "value": 0.45639302317038016,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.45309416589117885 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_cv",
            "value": 0.001096244428857634,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010883533283992724 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_mean",
            "value": 416.02805853956676,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 416.0154572601894 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_median",
            "value": 416.278454262073,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 416.2571768186969 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_stddev",
            "value": 0.5603753714735958,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5649641558695989 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_cv",
            "value": 0.0013469653307537687,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013580364527567355 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_mean",
            "value": 68886.57131560634,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 68884.58782247703 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_median",
            "value": 68712.62805179476,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 68708.90936048234 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_stddev",
            "value": 886.5905848934768,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 885.6301890993841 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_cv",
            "value": 0.012870296314088992,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012856724807321897 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_mean",
            "value": 315576.9284309339,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 315566.08095021895 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_median",
            "value": 315829.0049931961,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 315822.31003177905 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_stddev",
            "value": 2007.9657963784612,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2012.7004986186596 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_cv",
            "value": 0.0063628409287148436,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006378063486918818 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_mean",
            "value": 1707750.0399347858,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1707230.132029337 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_median",
            "value": 1706574.3863079657,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1706525.931540313 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_stddev",
            "value": 3189.1710474084343,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2471.075793437331 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_cv",
            "value": 0.0018674694614735424,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014474180996911247 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_mean",
            "value": 7822153.8127340535,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7821676.250936266 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_median",
            "value": 7813962.8314609965,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7813286.651685175 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_stddev",
            "value": 91050.27475294156,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 90888.7857019115 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_cv",
            "value": 0.011640051695827883,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011620116044950338 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_mean",
            "value": 27284150.78205123,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27281889.47435848 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_median",
            "value": 27222610.538462263,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27221096.461537708 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_stddev",
            "value": 170653.9351472472,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 170925.45832402774 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_cv",
            "value": 0.006254691102920864,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0062651620403592675 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_mean",
            "value": 652.1497136721969,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 652.1059046288561 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_median",
            "value": 649.1755801855938,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 649.1452760074002 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_stddev",
            "value": 6.2051528397196085,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.188178272838528 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_cv",
            "value": 0.009514920745389805,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009489529582408103 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_mean",
            "value": 2538.5237240339507,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2538.3294694331894 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_median",
            "value": 2530.9222933433034,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2530.841267031833 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_stddev",
            "value": 14.375501931458134,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.32140111336573 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_cv",
            "value": 0.005662937791502742,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005642057615382651 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_mean",
            "value": 10105.51766220786,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10104.933608164247 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_median",
            "value": 10100.507639529604,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10099.176775830327 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_stddev",
            "value": 36.190913093452345,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 36.32045031501285 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_cv",
            "value": 0.0035813022452869897,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003594328446222335 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_mean",
            "value": 40916.2046237379,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40915.18284780174 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_median",
            "value": 40917.036604589135,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40914.634596297816 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_stddev",
            "value": 37.27466831179235,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 37.65513318208465 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_cv",
            "value": 0.000911000144186568,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009203217622699137 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_mean",
            "value": 169737.90792880338,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 169729.41836569348 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_median",
            "value": 169791.169174764,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 169783.45048543529 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_stddev",
            "value": 235.4305199017691,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 235.18876350309847 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_cv",
            "value": 0.0013870238108538515,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00138566882375316 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_mean",
            "value": 678965.0145914132,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 678944.406290528 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_median",
            "value": 679383.7859921971,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 679359.9289883194 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_stddev",
            "value": 1155.8187566647016,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1137.39441749955 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_cv",
            "value": 0.00170232446713068,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001675239396571221 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_mean",
            "value": 745.7685197451225,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 745.7342194891457 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_median",
            "value": 745.9012326554204,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 745.8782728721831 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_stddev",
            "value": 0.277407083457675,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2648836975097914 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_cv",
            "value": 0.0003719747832108588,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00035519852862759345 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_mean",
            "value": 2924.0832663540696,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2924.0145610069544 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_median",
            "value": 2925.865949430605,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2925.7948677160634 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_stddev",
            "value": 3.4250050215347634,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.3732833489375715 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_cv",
            "value": 0.00117130899141777,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001153647931142963 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_mean",
            "value": 11669.15359346508,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11669.004820254055 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_median",
            "value": 11670.312244721223,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11670.197618840299 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_stddev",
            "value": 16.200245672106675,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 16.246664722129818 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_cv",
            "value": 0.001388296549732543,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013922922282052928 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_mean",
            "value": 47221.38035802439,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 47221.072594792146 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_median",
            "value": 47226.682364050655,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 47226.726082850655 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_stddev",
            "value": 16.09502323386633,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 16.295361027533342 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_cv",
            "value": 0.0003408418625596419,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003450866346761149 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_mean",
            "value": 195621.37460582601,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 195613.59998145132 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_median",
            "value": 195707.65943238672,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 195704.32804674414 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_stddev",
            "value": 187.70499482393942,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 182.25130914941295 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_cv",
            "value": 0.0009595321329387551,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000931690379230762 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_mean",
            "value": 778250.7034970397,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 778208.0740327322 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_median",
            "value": 778247.9229910979,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 778208.7354910594 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_stddev",
            "value": 283.97784364051853,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 260.5073265392049 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_cv",
            "value": 0.000364892498477001,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000334752793284753 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_mean",
            "value": 14.41651630822336,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.415894957242513 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_median",
            "value": 14.419851517533678,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.418937645016646 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_stddev",
            "value": 0.008674119444772534,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008290994485820108 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_cv",
            "value": 0.0006016793002776064,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005751286694590357 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_mean",
            "value": 14.426678807989006,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.426026588257882 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_median",
            "value": 14.420235164668922,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.419584166232681 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_stddev",
            "value": 0.014103827285059175,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014003073917235334 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_cv",
            "value": 0.0009776212164125365,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009706812774512138 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_mean",
            "value": 14.4307048433905,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.43035440350007 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_median",
            "value": 14.428355134627749,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.427276970474592 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_stddev",
            "value": 0.008083102797515241,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00826350065883438 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_cv",
            "value": 0.0005601322239791658,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005726471039983657 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_mean",
            "value": 14.427176711690088,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.426520751982075 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_median",
            "value": 14.429628314716489,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.42875878673145 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_stddev",
            "value": 0.007956146626046273,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0076503787361353465 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_cv",
            "value": 0.0005514694097840741,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005302996382606149 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_mean",
            "value": 14.42876482123207,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.428156650257904 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_median",
            "value": 14.432093707576643,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.431643295755054 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_stddev",
            "value": 0.013838258878405308,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01358765147333236 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_cv",
            "value": 0.0009590743940910433,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009417454913126052 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_mean",
            "value": 14.425216118059657,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.424283733128313 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_median",
            "value": 14.430005882500717,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.428969185315376 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_stddev",
            "value": 0.012092566465301916,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011918583713266534 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_cv",
            "value": 0.0008382936079663044,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008262860003157781 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}