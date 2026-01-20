window.BENCHMARK_DATA = {
  "lastUpdate": 1768921114984,
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
      }
    ]
  }
}