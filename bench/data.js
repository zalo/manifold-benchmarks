window.BENCHMARK_DATA = {
  "lastUpdate": 1768921050257,
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
      }
    ]
  }
}