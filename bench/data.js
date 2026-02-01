window.BENCHMARK_DATA = {
  "lastUpdate": 1769918351757,
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
          "id": "eb62ed5a37987691c6a36db3c4fb5e0f90aba172",
          "message": "Benchmark: v3.3.1\n\nAdd git config for data.js update step\n\nConfigure git user.name and user.email before committing on gh-pages\nbranch to fix \"Author identity unknown\" error.\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-20T16:20:12Z",
          "url": "https://github.com/zalo/manifold-benchmarks/commit/eb62ed5a37987691c6a36db3c4fb5e0f90aba172"
        },
        "date": 1768926337155,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SphereCreation/16_mean",
            "value": 44925.84695961497,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 44924.34789292223 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_median",
            "value": 44875.705250674706,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 44873.17240924959 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_stddev",
            "value": 123.73438869244518,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 123.65391477732948 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_cv",
            "value": 0.002754191563793406,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0027524921468434047 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_mean",
            "value": 207060.49010523126,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 204643.33873926048 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_median",
            "value": 207129.3014769764,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 204840.7219808862 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_stddev",
            "value": 462.9297008141964,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 462.09649363161924 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_cv",
            "value": 0.002235722037453541,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002258057831143891 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_mean",
            "value": 1129202.217016714,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1129044.2331717825 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_median",
            "value": 1128913.2697899668,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1128748.0533117934 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_stddev",
            "value": 550.6908630094077,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 548.4715510620684 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_cv",
            "value": 0.0004876813512324664,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004857839356047791 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_mean",
            "value": 3678832.500881789,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3678367.0687830676 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_median",
            "value": 3679042.978836261,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3678591.7777777775 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_stddev",
            "value": 1283.3783086826966,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1495.6140696704715 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_cv",
            "value": 0.000348854781612123,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00040659728670452484 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_mean",
            "value": 10244073.99033818,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10243657.879227042 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_median",
            "value": 10156223.36231847,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10155723.057971004 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_stddev",
            "value": 199980.07555557022,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 199687.79775788795 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_cv",
            "value": 0.019521537597657318,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.019493798027248817 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_mean",
            "value": 29850524.77777906,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 29847880.26388887 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_median",
            "value": 29858145.83333498,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 29852520.00000001 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_stddev",
            "value": 61272.33565540215,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 60500.80760465385 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_cv",
            "value": 0.002052638474919332,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002026971666656345 ns\nthreads: 1"
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
            "value": 4189.058992012586,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4188.321782936945 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_median",
            "value": 4184.334533555509,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4183.559924523343 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_stddev",
            "value": 10.167077664862454,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10.79856484589955 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_cv",
            "value": 0.002427055260918586,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0025782557801295194 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_mean",
            "value": 4188.570861932011,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4188.226071217362 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_median",
            "value": 4191.40797954674,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4191.309863025158 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_stddev",
            "value": 8.841118181746207,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.054922908889138 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_cv",
            "value": 0.002110772020619026,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0021619947813030084 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_mean",
            "value": 4190.291856296987,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4190.122142625653 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_median",
            "value": 4185.083709611382,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4185.032847999706 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_stddev",
            "value": 12.32465175150527,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.289280493036415 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_cv",
            "value": 0.0029412394587704726,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0029329170068860076 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_mean",
            "value": 19124.786964202933,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19124.004870898425 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_median",
            "value": 19125.84349393842,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19124.956516988907 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_stddev",
            "value": 2.789181878224951,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.5062941407975363 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_cv",
            "value": 0.00014584119987561892,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00013105487881418814 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_mean",
            "value": 38515.93292962638,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38513.218056702484 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_median",
            "value": 38516.75667492878,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38514.855766584034 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_stddev",
            "value": 5.120349252862235,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.348373785703584 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_cv",
            "value": 0.00013294106784892838,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00011290601006910232 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_mean",
            "value": 78459.0962076308,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78455.02032292954 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_median",
            "value": 78342.62859380538,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78340.69661035917 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_stddev",
            "value": 218.4245544481432,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 216.7419902325705 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_cv",
            "value": 0.0027839290153191896,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0027626274181108677 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_mean",
            "value": 159124.72169312983,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 159114.81965230542 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_median",
            "value": 159143.5049886677,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 159138.75555555566 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_stddev",
            "value": 163.82467838844568,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 161.65182023716966 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_cv",
            "value": 0.0010295363074028163,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010159444644465424 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_mean",
            "value": 465160.6494252729,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 465146.63793103467 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_median",
            "value": 464269.32625997596,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 464241.4801061016 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_stddev",
            "value": 1792.8855080237352,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1805.0327893472204 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_cv",
            "value": 0.003854336152980538,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003880567206453387 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_mean",
            "value": 151.89490607792297,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.88681277655107 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_median",
            "value": 151.19009130624278,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.17587555398475 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_stddev",
            "value": 1.8055534255989738,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.8105488974269344 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_cv",
            "value": 0.011886859620379334,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011920382450124428 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_mean",
            "value": 149.43054698984486,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.4237945328476 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_median",
            "value": 149.54836152298742,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.54004632524416 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_stddev",
            "value": 0.3303333089847709,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3280703299399447 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_cv",
            "value": 0.002210614333140466,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002195569527367514 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_mean",
            "value": 150.25683731297678,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.24567208851633 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_median",
            "value": 150.3564423976798,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.34670367683285 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_stddev",
            "value": 0.26088917047772514,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.25786164725643296 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_cv",
            "value": 0.001736288179248092,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00171626672284121 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_mean",
            "value": 149.2680376423047,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.26166635201483 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_median",
            "value": 150.0492977976743,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.0390519268894 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_stddev",
            "value": 2.07172578519685,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.068134098950433 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_cv",
            "value": 0.013879232405810722,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013855761827507668 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_mean",
            "value": 149.8826259276685,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.8704233525688 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_median",
            "value": 149.87571673228607,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.8636641104799 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_stddev",
            "value": 0.1858428623440769,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.18283063419046922 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_cv",
            "value": 0.0012399226474305459,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012199247196383893 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_mean",
            "value": 147.39760507610114,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.3861498256567 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_median",
            "value": 145.96976875981395,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 145.96498681032054 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_stddev",
            "value": 2.6542713020910518,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.6580781159848104 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_cv",
            "value": 0.018007560575496843,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.018034789015990003 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_mean",
            "value": 146.01843481379277,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.01003753025768 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_median",
            "value": 145.81073168486338,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 145.79977765997904 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_stddev",
            "value": 0.37050264768860086,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3688651406790744 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_cv",
            "value": 0.002537368984683868,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0025262998826545363 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_mean",
            "value": 148.22089009664595,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.21405308604275 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_median",
            "value": 146.79870763239384,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.78683847479456 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_stddev",
            "value": 2.58628867490649,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.5918021106346263 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_cv",
            "value": 0.017448881012791965,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.017486885060285114 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_mean",
            "value": 148.80435677000727,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.79887469004336 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_median",
            "value": 149.7112724065657,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.70455004303577 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_stddev",
            "value": 1.9294839715766214,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.9249506648352515 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_cv",
            "value": 0.012966582521228471,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012936594237322255 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_mean",
            "value": 148.10096230633147,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.09147586502934 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_median",
            "value": 146.9014481170736,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.89086821085786 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_stddev",
            "value": 2.3154091879137777,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.315148801540132 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_cv",
            "value": 0.01563399151400917,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015633234715346882 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_mean",
            "value": 147.49712230070475,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.48969590138563 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_median",
            "value": 146.58754331369295,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.5752521270401 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_stddev",
            "value": 1.7732229456872333,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.7721799348342842 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_cv",
            "value": 0.012022085028019294,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012015618609853238 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_mean",
            "value": 149.5778341516287,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.56981890635817 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_median",
            "value": 149.67252954199824,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.66926416613254 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_stddev",
            "value": 3.8615233066395143,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.862838133187569 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_cv",
            "value": 0.02581614668069766,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.025826320854249296 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_mean",
            "value": 148.4532569970308,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.44795598232147 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_median",
            "value": 147.49716916765033,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.48884250924982 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_stddev",
            "value": 1.826902706212319,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.8307051263056582 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_cv",
            "value": 0.012306248735579166,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012332302686092055 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_mean",
            "value": 151.30391599701406,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.29691856243008 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_median",
            "value": 150.48482268207152,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.46873837276542 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_stddev",
            "value": 1.8841925523068186,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.8873970915364946 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_cv",
            "value": 0.012453032295238165,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01247478870997424 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_mean",
            "value": 148.34380569908143,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.33938956112357 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_median",
            "value": 147.1210348974556,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.11306216904984 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_stddev",
            "value": 2.1280556327334197,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.1300155877871583 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_cv",
            "value": 0.014345429677395672,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014359069388710682 ns\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_mean",
            "value": 0.0019581478525846695,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0019580910504514008 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_median",
            "value": 0.0020042555905142767,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0020042197217965954 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_stddev",
            "value": 0.00008565480412968457,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0000856320257631241 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_cv",
            "value": 0.043742766419105676,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0437324024045681 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_mean",
            "value": 0.013988775431017184,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.013987613691214347 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_median",
            "value": 0.013977429077164627,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.013975004340173765 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_stddev",
            "value": 0.00020052989541408063,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00019998729605426215 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_cv",
            "value": 0.014335057160861092,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.014297456340238695 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_mean",
            "value": 0.029530023444793014,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029528388527425477 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_median",
            "value": 0.029514788049745593,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.02951314828693831 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_stddev",
            "value": 0.0002463432825552386,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00024655385814556106 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_cv",
            "value": 0.008342129596198337,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.008349722773275147 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_mean",
            "value": 0.1684714994739793,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.16844513546977483 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_median",
            "value": 0.1697745639718383,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.169739251031803 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_stddev",
            "value": 0.0027016789431052054,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.002708861265604861 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_cv",
            "value": 0.016036415367232396,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.016081564231879696 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_mean",
            "value": 0.34032534918323076,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.34030696312469894 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_median",
            "value": 0.3397047321688143,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3396735735080087 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_stddev",
            "value": 0.0029643971958753026,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.002966850625155471 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_cv",
            "value": 0.00871048014198694,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00871816021016392 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_mean",
            "value": 48.185514577779834,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 48.18064126666665 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_median",
            "value": 48.301173800003504,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 48.29390866666662 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_stddev",
            "value": 0.21168438761677844,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.20765225990752256 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_cv",
            "value": 0.004393112525032453,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.004309869160068339 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_mean",
            "value": 242.63298922221566,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 242.61793577777743 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_median",
            "value": 242.74595400000484,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 242.74166999999616 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_stddev",
            "value": 0.2605556510928409,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.27300608363787643 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_cv",
            "value": 0.0010738673744575217,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.001125251036213302 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_mean",
            "value": 0.02909584142408386,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029094611588132795 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_median",
            "value": 0.029073764649216766,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029072827099477158 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_stddev",
            "value": 0.00005402608474641828,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.000054358937040813205 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_cv",
            "value": 0.0018568318392641022,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0018683506695440922 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_mean",
            "value": 0.16488048905110195,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.16487138584098693 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_median",
            "value": 0.16483161031317714,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.16482292559453302 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_stddev",
            "value": 0.001267054828692892,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.001264670401827664 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_cv",
            "value": 0.007684686259634939,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.007670648216952561 ms\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_mean",
            "value": 422.42074615588245,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 422.409453268536 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_median",
            "value": 424.74696122276845,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 424.73394469051533 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_stddev",
            "value": 4.867848058400723,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.870653494036708 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_cv",
            "value": 0.011523695516139212,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0115306451035799 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_mean",
            "value": 421.5594439441749,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 421.54665986404643 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_median",
            "value": 424.26049439262033,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 424.2450626084303 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_stddev",
            "value": 5.101009753451727,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.096526942600657 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_cv",
            "value": 0.012100333242984419,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012090066006558667 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_mean",
            "value": 417.9244377699738,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 417.9127132504586 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_median",
            "value": 414.5335702677136,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 414.5271193659457 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_stddev",
            "value": 6.047936230111838,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.043339961579142 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_cv",
            "value": 0.014471362963083366,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014460770802053387 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_mean",
            "value": 421.8702817580027,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 421.8487204087384 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_median",
            "value": 424.98744803202544,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 424.9545736019956 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_stddev",
            "value": 5.6722995812532035,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.66439459447686 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_cv",
            "value": 0.013445601234616007,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013427549546644364 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_mean",
            "value": 421.79899802649567,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 421.7866748091315 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_median",
            "value": 420.8332769670342,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 420.8156864659922 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_stddev",
            "value": 2.978937248889306,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.9788221314629446 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_cv",
            "value": 0.007062456911531547,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007062390325182587 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_mean",
            "value": 67529.22812846025,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 67526.8181551688 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_median",
            "value": 67490.52393980772,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 67488.4733242117 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_stddev",
            "value": 716.323149414464,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 715.701871986695 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_cv",
            "value": 0.010607601615878221,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010598779737290374 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_mean",
            "value": 317422.1092057635,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 317409.36838146526 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_median",
            "value": 317512.38041515375,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 317503.69765342557 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_stddev",
            "value": 1950.1964024347465,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1955.4582530585467 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_cv",
            "value": 0.006143858117868422,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006160682222550094 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_mean",
            "value": 1704789.7886179155,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1704695.49430894 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_median",
            "value": 1702983.4073172223,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1702877.368292689 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_stddev",
            "value": 5481.121347397507,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5453.357687885266 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_cv",
            "value": 0.0032151303251535123,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0031990215883664214 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_mean",
            "value": 7750484.681481693,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7750222.285185121 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_median",
            "value": 7753276.166666486,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7752922.944444486 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_stddev",
            "value": 5101.783626580161,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4926.841215915743 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_cv",
            "value": 0.0006582534946194914,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000635703214001179 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_mean",
            "value": 25999846.000000816,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25998950.192308124 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_median",
            "value": 25784781.653844506,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25783802.884615827 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_stddev",
            "value": 504296.5666911786,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 504992.6473037684 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_cv",
            "value": 0.01939613668062352,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01942357839714513 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_mean",
            "value": 647.4189632849037,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 647.3970630265763 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_median",
            "value": 647.2545531988131,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 647.2441911604477 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_stddev",
            "value": 0.34471854532634666,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.33682194093196743 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_cv",
            "value": 0.0005324504916836202,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005202710363827222 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_mean",
            "value": 2530.3195379617314,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2530.203001948041 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_median",
            "value": 2529.517541482015,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2529.3402653540093 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_stddev",
            "value": 4.0659484784119755,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.073014699128635 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_cv",
            "value": 0.0016068913105288084,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016097580692113478 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_mean",
            "value": 10084.700515265182,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10084.400240778257 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_median",
            "value": 10083.255793123048,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10082.889251661303 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_stddev",
            "value": 6.044948051584105,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.0384051012820725 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_cv",
            "value": 0.000599417706300141,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005987867356617394 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_mean",
            "value": 40771.26122401392,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40769.86020691399 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_median",
            "value": 40770.62359517527,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40769.34699819379 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_stddev",
            "value": 16.683280862927962,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 16.52982183047263 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_cv",
            "value": 0.0004091921702216475,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00040544220035538435 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_mean",
            "value": 168808.9773548514,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 168803.0114831753 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_median",
            "value": 168789.83955673352,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 168784.98145025005 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_stddev",
            "value": 122.06763901867383,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 122.78943007384318 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_cv",
            "value": 0.0007231110627610571,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007274125561799097 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_mean",
            "value": 677887.1716877484,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 677856.2439261472 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_median",
            "value": 677795.3391642843,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 677782.1564625875 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_stddev",
            "value": 392.3132468757663,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 380.48192686059514 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_cv",
            "value": 0.0005787294158392417,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005613017955796079 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_mean",
            "value": 747.2297672823756,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 747.190341224802 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_median",
            "value": 746.8715787074442,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 746.8538391650445 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_stddev",
            "value": 0.6339687666495367,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6119074940322983 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_cv",
            "value": 0.0008484254701940456,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008189445985466747 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_mean",
            "value": 2944.4314329264566,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2944.322774118698 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_median",
            "value": 2925.190242060779,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2925.178738935298 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_stddev",
            "value": 35.571977220222514,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 35.535425480135 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_cv",
            "value": 0.012081102253710042,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012069133789440441 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_mean",
            "value": 11779.695540776715,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11779.058658779095 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_median",
            "value": 11694.2443247103,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11693.498332736293 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_stddev",
            "value": 150.1052438225553,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.84535643154626 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_cv",
            "value": 0.012742709970979257,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012721335445584564 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_mean",
            "value": 47232.403239552776,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 47230.16550006785 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_median",
            "value": 47183.38941983859,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 47179.35341230449 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_stddev",
            "value": 102.15466263719856,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 101.75460957124045 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_cv",
            "value": 0.0021628089114816298,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002154441096995399 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_mean",
            "value": 194647.06333333533,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 194639.86555555675 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_median",
            "value": 194558.57500001157,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 194547.99083333462 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_stddev",
            "value": 311.4024285687663,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 313.87996943658663 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_cv",
            "value": 0.0015998311160517538,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016126191237374992 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_mean",
            "value": 779946.4377555108,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 779899.778149383 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_median",
            "value": 779525.0178373492,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 779500.2006688858 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_stddev",
            "value": 753.3629098422263,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 731.452947130378 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_cv",
            "value": 0.0009659162134392393,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009378806964992808 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_mean",
            "value": 14.436008991755505,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.43543847657286 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_median",
            "value": 14.437263779397753,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.437222535842393 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_stddev",
            "value": 0.007793982201088404,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008030454831970063 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_cv",
            "value": 0.0005398986801365666,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005563014137050714 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_mean",
            "value": 14.437687528958934,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.437053396926425 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_median",
            "value": 14.435919444757358,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.435123840955264 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_stddev",
            "value": 0.003965582979402215,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003956984338720739 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_cv",
            "value": 0.0002746688464789183,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00027408531574477383 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_mean",
            "value": 14.442589240428644,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.441866351243155 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_median",
            "value": 14.438511678994955,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.437563330932393 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_stddev",
            "value": 0.013977048341137477,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014224423181532385 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_cv",
            "value": 0.000967766105402486,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009849435547717798 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_mean",
            "value": 14.457569686933097,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.446010241760419 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_median",
            "value": 14.430949893080353,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.429945855631006 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_stddev",
            "value": 0.04715481878824751,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.028396314570024422 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_cv",
            "value": 0.003261600656911689,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0019656856180218234 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_mean",
            "value": 14.447545811371251,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.447048487468885 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_median",
            "value": 14.445612804100678,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.444815737195997 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_stddev",
            "value": 0.02105606609828525,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.021181888112333416 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_cv",
            "value": 0.0014574147314149798,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014661740860568314 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_mean",
            "value": 14.441723945999678,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.440997690147219 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_median",
            "value": 14.44232697995229,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.442253821454704 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_stddev",
            "value": 0.012612465651338256,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012631592287040338 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_cv",
            "value": 0.0008733351848088662,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000874703573677503 ns\nthreads: 1"
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
          "id": "eb62ed5a37987691c6a36db3c4fb5e0f90aba172",
          "message": "Benchmark: v3.0.0\n\nAdd git config for data.js update step\n\nConfigure git user.name and user.email before committing on gh-pages\nbranch to fix \"Author identity unknown\" error.\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-20T16:20:12Z",
          "url": "https://github.com/zalo/manifold-benchmarks/commit/eb62ed5a37987691c6a36db3c4fb5e0f90aba172"
        },
        "date": 1768927245048,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SphereCreation/16_mean",
            "value": 41764.083032925206,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 41757.321036609785 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_median",
            "value": 41608.89353520907,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 41599.794099975974 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_stddev",
            "value": 281.7939021057575,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 280.5617114766913 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_cv",
            "value": 0.006747278561906938,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006718862812839819 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_mean",
            "value": 179515.50059191312,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 178574.97623879588 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_median",
            "value": 178675.14180619083,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 177714.51395230845 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_stddev",
            "value": 1613.6757966769485,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1633.617526951822 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_cv",
            "value": 0.0089890610635639,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00914807640667021 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_mean",
            "value": 891732.2976190526,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 891663.4987244891 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_median",
            "value": 891221.9170918297,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 891174.6071428567 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_stddev",
            "value": 1793.3404771215012,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1814.1076274679426 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_cv",
            "value": 0.002011074940214418,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002034520455376939 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_mean",
            "value": 3359264.546031682,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3358946.7253968264 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_median",
            "value": 3361645.690476204,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3361558.2285714294 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_stddev",
            "value": 7944.6744844592295,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7726.327301580215 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_cv",
            "value": 0.002365004117893698,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002300223234611566 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_mean",
            "value": 9672107.957142847,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9668131.700000009 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_median",
            "value": 9668490.14285783,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9667718.457142854 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_stddev",
            "value": 26693.51784373505,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26996.10796091121 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_cv",
            "value": 0.0027598449026845187,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002792277639423467 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_mean",
            "value": 29074804.240000654,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 29046966.853333365 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_median",
            "value": 29171988.68000014,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 29137613.000000045 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_stddev",
            "value": 171978.27214929537,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 181289.47662318707 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_cv",
            "value": 0.005915027689599726,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006241253261952296 ns\nthreads: 1"
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
            "value": 4323.640370160079,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4323.279042244009 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_median",
            "value": 4326.149504779413,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4326.082137476217 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_stddev",
            "value": 4.718358650133669,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.051481152465824 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_cv",
            "value": 0.001091293041553078,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001168437452939387 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_mean",
            "value": 4332.873587509473,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4332.620346454094 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_median",
            "value": 4332.126898597118,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4331.831075820286 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_stddev",
            "value": 4.260568268449052,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.16623243713865 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_cv",
            "value": 0.0009833123866643933,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009615964714167445 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_mean",
            "value": 4329.442981316762,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4329.123830494358 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_median",
            "value": 4329.068518907788,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4328.730501366929 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_stddev",
            "value": 1.0698395403316998,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.160572527884599 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_cv",
            "value": 0.00024710789469880435,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00026808485350073003 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_mean",
            "value": 21774.79483563695,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 21773.281076607116 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_median",
            "value": 21492.211458876318,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 21490.600165537548 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_stddev",
            "value": 507.2268355219532,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 507.5462154738763 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_cv",
            "value": 0.023294218813571473,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.023310506748529337 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_mean",
            "value": 43588.03549756802,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43585.55524490015 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_median",
            "value": 43538.4996582794,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43538.18477788131 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_stddev",
            "value": 104.72328923541387,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 103.98444332766543 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_cv",
            "value": 0.0024025696051673835,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0023857547011479777 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_mean",
            "value": 87494.73890208523,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 87487.91455129015 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_median",
            "value": 87510.32262097926,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 87504.22458421916 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_stddev",
            "value": 82.74495130079681,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 83.10204134096783 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_cv",
            "value": 0.0009457134490497322,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000949868810648686 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_mean",
            "value": 177261.95492529625,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 177252.04845108476 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_median",
            "value": 177341.75487464794,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 177335.08027348682 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_stddev",
            "value": 206.34045480951286,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 208.96783811877083 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_cv",
            "value": 0.0011640425318364068,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011789304549359749 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_mean",
            "value": 447760.211969028,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 447727.09478970413 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_median",
            "value": 438467.2887633631,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 438429.31198995287 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_stddev",
            "value": 17183.63198820919,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 17171.384606616473 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_cv",
            "value": 0.03837686227778942,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.038352346343215646 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_mean",
            "value": 146.89467663385642,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.88822760828614 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_median",
            "value": 146.86616866523102,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.8581767948089 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_stddev",
            "value": 0.16602992965961583,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.1618226350805738 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_cv",
            "value": 0.0011302651223601187,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011016719155473365 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_mean",
            "value": 148.21936965820638,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.2097578210548 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_median",
            "value": 147.7707088244427,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.76262991145236 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_stddev",
            "value": 1.5397090133798745,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.5403638086992448 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_cv",
            "value": 0.010388041839136416,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01039313356519377 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_mean",
            "value": 149.09954939656794,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.08948343607858 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_median",
            "value": 149.7580966751714,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.74396038071723 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_stddev",
            "value": 1.6050350653694585,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.5996031678446678 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_cv",
            "value": 0.010764855238431755,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010729148233520376 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_mean",
            "value": 150.12423367621375,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.1142827626835 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_median",
            "value": 150.2728267117446,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.26512508257412 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_stddev",
            "value": 0.27509712038070055,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2795958769020754 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_cv",
            "value": 0.0018324631116787375,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001862553460979393 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_mean",
            "value": 148.22370809149135,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.21967273181266 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_median",
            "value": 147.74948671031115,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.74346516096068 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_stddev",
            "value": 1.5812119337406803,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.5807689391506894 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_cv",
            "value": 0.010667739689555427,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010665041353929572 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_mean",
            "value": 149.31723055956405,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.30485885799249 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_median",
            "value": 149.31791197267935,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.31870264881886 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_stddev",
            "value": 0.018560406098358895,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.027105344114162728 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_cv",
            "value": 0.00012430183729502653,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00018154361700943225 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_mean",
            "value": 149.8482887681665,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.84079287677113 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_median",
            "value": 149.86740693673144,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.86326712577943 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_stddev",
            "value": 0.08093403611515039,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07721416233584856 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_cv",
            "value": 0.0005401065089262726,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005153080202889035 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_mean",
            "value": 153.1089204074688,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153.10113544433935 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_median",
            "value": 153.22221810879805,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153.20987461766143 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_stddev",
            "value": 0.2757329111214357,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.27346395382258915 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_cv",
            "value": 0.0018008938368034187,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017861654195373902 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_mean",
            "value": 149.69046644874913,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.68179469577427 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_median",
            "value": 149.68862494223285,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.67420119660463 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_stddev",
            "value": 0.06998762169138002,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07166836219147917 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_cv",
            "value": 0.0004675489585393356,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00047880480279611766 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_mean",
            "value": 152.26762719842836,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.2556162392603 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_median",
            "value": 150.25364436601203,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.2386279445714 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_stddev",
            "value": 3.960691608730198,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.9609054969026882 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_cv",
            "value": 0.026011383257248773,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.026014840008780824 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_mean",
            "value": 148.95655185933643,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.94594957571516 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_median",
            "value": 147.6644824378673,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.65386734352387 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_stddev",
            "value": 2.4008246223203304,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.3954506510711115 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_cv",
            "value": 0.016117616797329547,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.016082684073616973 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_mean",
            "value": 150.67690504371035,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.67132287146663 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_median",
            "value": 151.42966771770244,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.42402117754057 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_stddev",
            "value": 1.3721717565850702,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.3713280255499878 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_cv",
            "value": 0.009106715831381146,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009101453411408807 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_mean",
            "value": 147.84954339293256,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.84141937025643 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_median",
            "value": 147.89081310143777,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.88248524417244 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_stddev",
            "value": 0.253406264665927,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.25337149361666844 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_cv",
            "value": 0.0017139468871571785,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017138058785956373 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_mean",
            "value": 147.72734009671026,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.72304065787048 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_median",
            "value": 147.67373633814475,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.6686615837348 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_stddev",
            "value": 0.10673066223379128,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.10307305491565227 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_cv",
            "value": 0.0007224841533322109,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000697745283718953 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_mean",
            "value": 148.6947737439379,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.6874224233163 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_median",
            "value": 148.12213934495944,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.11394880681877 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_stddev",
            "value": 1.4910465844175913,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.4909393874092662 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_cv",
            "value": 0.01002756550802028,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010027340329866838 ns\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_mean",
            "value": 0.0012604711183395929,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0012604354427338362 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_median",
            "value": 0.0012690474892343361,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0012690193708762131 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_stddev",
            "value": 0.000029598130268109823,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.000029583503956647193 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_cv",
            "value": 0.02348179965210085,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.023470860112027397 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_mean",
            "value": 0.009313167006137778,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.009312734342177841 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_median",
            "value": 0.00922432155892429,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.009224130739682616 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_stddev",
            "value": 0.0002046114155377525,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00020439710056387316 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_cv",
            "value": 0.021970122022176214,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.021948129631288678 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_mean",
            "value": 0.020348409791452027,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.02034611833421269 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_median",
            "value": 0.020512229957512347,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.020509813390352932 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_stddev",
            "value": 0.0005770785288939435,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.000575742611915502 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_cv",
            "value": 0.0283598833917903,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.02829741783951837 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_mean",
            "value": 0.12211424169590786,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.12211083608187023 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_median",
            "value": 0.12198755719298372,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.12198782947368308 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_stddev",
            "value": 0.0007091095820355456,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0007103794286413344 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_cv",
            "value": 0.005806935965760564,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0058174970496889765 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_mean",
            "value": 0.23207698465131765,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.23171044422199608 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_median",
            "value": 0.2333835415415234,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.2333677077077095 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_stddev",
            "value": 0.00359431163930393,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.003241095877213136 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_cv",
            "value": 0.015487583332333348,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.01398769869047388 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_mean",
            "value": 44.75747266666493,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 44.75514104166638 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_median",
            "value": 44.706368437495314,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 44.70666918749978 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_stddev",
            "value": 0.12863244562755802,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.1258157591983321 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_cv",
            "value": 0.002873988140160618,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.002811202384128328 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_mean",
            "value": 224.1117471111238,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 224.08467577777614 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_median",
            "value": 223.975132000002,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 223.9402446666645 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_stddev",
            "value": 0.3899224158078616,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.37406865779506776 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_cv",
            "value": 0.001739857106261021,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.001669318334672872 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_mean",
            "value": 0.019615649481564676,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.01961461976100799 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_median",
            "value": 0.019640563202679245,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.019639943785744022 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_stddev",
            "value": 0.0001380311959357254,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00013754520564146296 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_cv",
            "value": 0.00703678948104425,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.007012381953734829 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_mean",
            "value": 0.10399927170617784,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.10399534650365343 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_median",
            "value": 0.10411319173997279,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.10411039406590461 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_stddev",
            "value": 0.0008654108949085501,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0008650014971155654 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_cv",
            "value": 0.008321316877617542,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.008317694264186883 ms\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_mean",
            "value": 405.9522833828981,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 405.9427089973372 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_median",
            "value": 400.36658184601566,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 400.35683785725564 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_stddev",
            "value": 10.077429044601047,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10.077437863870129 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_cv",
            "value": 0.024824171354877977,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02482477857223008 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_mean",
            "value": 400.1917858262131,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 400.18400085695845 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_median",
            "value": 400.54737108879044,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 400.5393701663847 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_stddev",
            "value": 0.7688190605109133,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.767573462553924 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_cv",
            "value": 0.0019211265391758437,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0019180513486552024 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_mean",
            "value": 399.99892679570286,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 399.99375117211594 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_median",
            "value": 399.92840635161474,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 399.91324541099635 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_stddev",
            "value": 0.18180680894365375,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.18736691778574432 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_cv",
            "value": 0.00045451824183646004,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000468424612226307 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_mean",
            "value": 400.1557840794407,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 400.1499287189186 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_median",
            "value": 400.37353227609475,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 400.36796188735093 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_stddev",
            "value": 0.5078824243351582,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5114418075218133 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_cv",
            "value": 0.001269211753376358,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012781254495263714 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_mean",
            "value": 400.19179767535593,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 400.182462544463 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_median",
            "value": 400.20891392270806,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 400.19406062198567 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_stddev",
            "value": 0.5214081611390179,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5207244653297963 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_cv",
            "value": 0.0013028956719447688,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013012176046368856 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_mean",
            "value": 84307.13373762432,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84306.01487770295 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_median",
            "value": 84270.43881140418,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84269.96373559539 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_stddev",
            "value": 112.25628105022902,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 111.25802606608916 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_cv",
            "value": 0.0013315158050514015,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013196926248676764 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_mean",
            "value": 402624.35624282697,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 402604.3497518089 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_median",
            "value": 401098.09908356896,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 401084.1506300071 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_stddev",
            "value": 2689.9265315278276,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2684.816859740681 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_cv",
            "value": 0.006680983129360173,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0066686235789448715 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_mean",
            "value": 1915377.0336975586,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1915320.6912568323 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_median",
            "value": 1914412.4071037937,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1914382.508196749 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_stddev",
            "value": 2717.0895408952892,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2739.1819426446473 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_cv",
            "value": 0.0014185664196098545,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001430142719779839 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_mean",
            "value": 8445336.223529493,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8444998.835294006 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_median",
            "value": 8334790.399999292,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8334563.2235293845 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_stddev",
            "value": 191809.7596481483,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 191842.2319009204 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_cv",
            "value": 0.022711915141252568,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.022716667656501995 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_mean",
            "value": 28696574.77777802,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 28693735.138888758 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_median",
            "value": 28564786.833333265,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 28562951.874999244 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_stddev",
            "value": 438783.86868463433,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 440135.1751518568 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_cv",
            "value": 0.01529046139068899,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015339068720800294 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_mean",
            "value": 645.5953341336221,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 645.5621876863703 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_median",
            "value": 645.6186760370948,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 645.5756631083242 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_stddev",
            "value": 0.7523953442889627,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.7620832604596853 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_cv",
            "value": 0.0011654287206066386,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001180495504532127 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_mean",
            "value": 2503.0772552666313,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2502.963153436826 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_median",
            "value": 2502.6298690141216,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2502.481726433289 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_stddev",
            "value": 3.0358837045303773,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.9924341676327386 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_cv",
            "value": 0.0012128605691824686,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011955566199701418 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_mean",
            "value": 10001.521594573756,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10001.067453569458 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_median",
            "value": 9996.75381185858,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9996.33191386002 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_stddev",
            "value": 11.481646110423677,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.742974614650429 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_cv",
            "value": 0.0011479899335170112,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011741721240425462 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_mean",
            "value": 40291.389963908994,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40290.61612147707 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_median",
            "value": 40288.41672425491,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40287.36736926894 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_stddev",
            "value": 13.87276517684584,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.760090508497486 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_cv",
            "value": 0.00034431091082418275,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003663406502396364 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_mean",
            "value": 167981.93503163938,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 167978.05815909783 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_median",
            "value": 168016.46455178177,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 168008.8502763733 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_stddev",
            "value": 106.21511852456467,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 104.71297732568769 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_cv",
            "value": 0.000632300839400136,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006233729480698629 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_mean",
            "value": 671406.5049727521,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 671375.5553416731 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_median",
            "value": 671398.7949951553,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 671347.3512992981 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_stddev",
            "value": 135.88791507105128,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 132.15553533967935 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_cv",
            "value": 0.00020239290811840743,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00019684293580278392 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_mean",
            "value": 745.8190916277563,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 745.8077614808954 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_median",
            "value": 745.9103656885819,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 745.9038642257142 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_stddev",
            "value": 0.19954139992862951,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2008214222558211 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_cv",
            "value": 0.00026754665061352715,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00026926700502159545 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_mean",
            "value": 2913.0425052296155,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2913.028237341958 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_median",
            "value": 2911.9264271704083,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2911.9336811817757 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_stddev",
            "value": 2.037715517072175,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.0343718487121065 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_cv",
            "value": 0.0006995145156357941,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006983701093705852 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_mean",
            "value": 11627.097313856299,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11626.757200073125 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_median",
            "value": 11627.234174796014,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11626.558040981106 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_stddev",
            "value": 1.164540347290666,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.0940000836616406 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_cv",
            "value": 0.00010015744393081275,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00009409331121619705 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_mean",
            "value": 46831.3876295549,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 46830.801849995805 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_median",
            "value": 46826.67342026156,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 46826.87950518151 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_stddev",
            "value": 12.72426778740305,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.902751894519634 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_cv",
            "value": 0.0002717038386317827,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00025416502439239565 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_mean",
            "value": 193715.09349930802,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 193709.3838635315 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_median",
            "value": 193701.32282157862,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 193698.77814661988 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_stddev",
            "value": 37.81929272704692,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 39.00916117913273 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_cv",
            "value": 0.00019523152297465151,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00020137982167459033 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_mean",
            "value": 787651.2070370408,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 787645.049629633 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_median",
            "value": 775832.8611110857,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 775820.5533333593 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_stddev",
            "value": 21109.285570766595,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 21106.640359035762 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_cv",
            "value": 0.02680029609828795,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.026797147228895223 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_mean",
            "value": 14.267592729030985,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.267321453013311 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_median",
            "value": 14.250340669839579,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.250233921602096 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_stddev",
            "value": 0.04508604974929625,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.045137502302603126 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_cv",
            "value": 0.0031600320113958262,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0031636984174818537 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_mean",
            "value": 14.238468379163775,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.238236686433309 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_median",
            "value": 14.240230674883042,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.24018992702325 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_stddev",
            "value": 0.009504847678034082,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009306723116110973 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_cv",
            "value": 0.0006675470580770642,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006536429560114523 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_mean",
            "value": 14.233557484819125,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.233299472629604 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_median",
            "value": 14.239827702689306,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.239419532077841 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_stddev",
            "value": 0.024537620750724232,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.024588282661061014 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_cv",
            "value": 0.0017239274704791802,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017275181140074985 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_mean",
            "value": 14.63642777589348,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.63626313550291 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_median",
            "value": 14.253012753353339,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.252814708846339 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_stddev",
            "value": 0.6976823627471012,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6977804552755283 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_cv",
            "value": 0.04766753018084094,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04767476840334576 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_mean",
            "value": 14.23974356423283,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.239542946937013 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_median",
            "value": 14.239690672249404,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.239566310100932 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_stddev",
            "value": 0.0024737893025937297,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002335903199890458 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_cv",
            "value": 0.00017372428733951052,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00016404341126643543 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_mean",
            "value": 14.252469772810448,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.252150820518054 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_median",
            "value": 14.254596913628218,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.25441716526403 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_stddev",
            "value": 0.012483979281057662,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012813367487073764 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_cv",
            "value": 0.0008759169098448785,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008990479856996075 ns\nthreads: 1"
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
          "id": "eb62ed5a37987691c6a36db3c4fb5e0f90aba172",
          "message": "Benchmark: v3.1.0\n\nAdd git config for data.js update step\n\nConfigure git user.name and user.email before committing on gh-pages\nbranch to fix \"Author identity unknown\" error.\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-20T16:20:12Z",
          "url": "https://github.com/zalo/manifold-benchmarks/commit/eb62ed5a37987691c6a36db3c4fb5e0f90aba172"
        },
        "date": 1768927612809,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SphereCreation/16_mean",
            "value": 45113.13458017303,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 45111.41703723079 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_median",
            "value": 45099.96455663107,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 45097.64471619148 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_stddev",
            "value": 288.178514662339,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 287.4184223745694 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_cv",
            "value": 0.0063879071437654405,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006371301130650825 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_mean",
            "value": 203546.04774011287,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 201689.36148775893 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_median",
            "value": 200160.68672316606,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 198434.0265536723 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_stddev",
            "value": 6365.008660300765,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6218.539774727485 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_cv",
            "value": 0.03127060795809503,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.030832264671059033 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_mean",
            "value": 1139651.5923497316,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1139576.7382513667 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_median",
            "value": 1139784.3163934585,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1139715.8409836076 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_stddev",
            "value": 1132.2290185341783,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1104.3426277086603 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_cv",
            "value": 0.0009934869798231495,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009690814059641375 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_mean",
            "value": 3771094.4157706075,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3770938.2831541174 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_median",
            "value": 3769093.0591397486,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3768924.5645161234 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_stddev",
            "value": 13030.843921017864,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12963.714944973768 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_cv",
            "value": 0.0034554541690929963,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0034377955754106263 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_mean",
            "value": 9802145.685185203,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9800642.004629629 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_median",
            "value": 9797845.902777879,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9795410.333333334 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_stddev",
            "value": 22458.200684262705,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 22454.41145439453 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_cv",
            "value": 0.002291151489230123,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002291116382354086 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_mean",
            "value": 31056584.043478172,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 31054573.362318803 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_median",
            "value": 31055153.956521545,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 31053400.56521732 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_stddev",
            "value": 5498.088901948339,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3940.0101535416757 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_cv",
            "value": 0.00017703456678465343,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00012687374924050414 ns\nthreads: 1"
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
            "value": 4183.933985948277,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4183.570303432104 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_median",
            "value": 4183.399172186437,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4182.802280369586 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_stddev",
            "value": 10.073545620722323,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.907157136341077 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_cv",
            "value": 0.0024076731742313047,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002368110589228888 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_mean",
            "value": 4185.826805429447,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4185.3510331533025 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_median",
            "value": 4187.616689767274,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4186.965367060163 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_stddev",
            "value": 3.8591087580410064,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.9201044527629136 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_cv",
            "value": 0.000921946592017459,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009366250098762808 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_mean",
            "value": 4182.479944583861,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4182.3524874385375 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_median",
            "value": 4185.688709358675,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4185.576467699532 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_stddev",
            "value": 8.101716588011804,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8.165027540691245 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_cv",
            "value": 0.0019370604749708825,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0019522571483906364 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_mean",
            "value": 19224.524341382854,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19223.95147274055 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_median",
            "value": 19208.46215697051,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19208.396103183262 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_stddev",
            "value": 27.82170778036897,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.535764449413232 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_cv",
            "value": 0.0014471987595802178,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014323675592116836 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_mean",
            "value": 38645.580563835996,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38644.70919362558 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_median",
            "value": 38634.3821905697,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38633.06254830508 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_stddev",
            "value": 57.69837484463923,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 57.28970604921574 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_cv",
            "value": 0.0014930135348680098,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001482472173931267 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_mean",
            "value": 78488.2134453784,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78484.79854341729 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_median",
            "value": 78416.82677871003,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78413.2053781511 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_stddev",
            "value": 167.49748970944086,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 166.01889613502928 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_cv",
            "value": 0.0021340464046363584,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002115300022630353 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_mean",
            "value": 159240.74158325547,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 159235.36813770098 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_median",
            "value": 159209.02456778646,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 159200.35987261139 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_stddev",
            "value": 154.93939864280296,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 156.12523474919658 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_cv",
            "value": 0.0009729884268455027,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009804683254425307 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_mean",
            "value": 471686.32183130673,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 471669.4790257102 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_median",
            "value": 471653.2611637436,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 471632.90866035206 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_stddev",
            "value": 494.15052237819367,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 494.67894712163934 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_cv",
            "value": 0.0010476252956830938,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010487830337113564 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_mean",
            "value": 151.92863936270936,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.92328500466658 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_median",
            "value": 151.89940598027948,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.8918777195428 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_stddev",
            "value": 0.35896087460432474,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3589491277697401 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_cv",
            "value": 0.0023626939338761105,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0023626998834228364 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_mean",
            "value": 152.2513523155666,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.24675583995713 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_median",
            "value": 152.3370109973682,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.33193737404204 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_stddev",
            "value": 0.275158058690254,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.27360329770393366 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_cv",
            "value": 0.0018072618371227504,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017971042876706506 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_mean",
            "value": 151.99530510172517,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.98835291611366 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_median",
            "value": 152.4811475488674,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.4750091145397 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_stddev",
            "value": 1.398933840804206,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.3993749144067478 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_cv",
            "value": 0.009203796392710607,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009207119411176853 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_mean",
            "value": 152.1382242808753,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.1312555435654 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_median",
            "value": 152.82635948204333,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.81956247412984 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_stddev",
            "value": 1.8673833573868779,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.8673121720565147 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_cv",
            "value": 0.01227425498235961,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012274349313588473 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_mean",
            "value": 150.86821576257935,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.86104912745517 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_median",
            "value": 150.20643428777467,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.2055957138097 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_stddev",
            "value": 1.1927369117026962,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.1923636801913553 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_cv",
            "value": 0.007905819696175775,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0079037212526872 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_mean",
            "value": 149.43883613232816,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.43266565780706 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_median",
            "value": 149.48811300937706,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.48593298386257 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_stddev",
            "value": 0.13733441405368732,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.14549558639791668 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_cv",
            "value": 0.0009190008274159577,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009736531551347275 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_mean",
            "value": 150.53126603580566,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.5269526081498 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_median",
            "value": 150.4693551182634,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.46290877701384 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_stddev",
            "value": 0.19681784490800755,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.19970251859335805 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_cv",
            "value": 0.0013074881391165081,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013266894408818703 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_mean",
            "value": 150.42713170333232,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.42139856491792 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_median",
            "value": 150.35890313066147,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.35201477022673 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_stddev",
            "value": 0.21898684863731285,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2149747557452789 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_cv",
            "value": 0.0014557669627656789,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014291500929802978 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_mean",
            "value": 150.53292372558255,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.52496360130021 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_median",
            "value": 150.5436738131424,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.540562808278 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_stddev",
            "value": 0.1725227869764994,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.17233232552042196 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_cv",
            "value": 0.0011460800913626298,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011448753841049486 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_mean",
            "value": 150.65686900377548,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.6199865308529 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_median",
            "value": 150.61605458204295,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.5470604541965 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_stddev",
            "value": 0.18276672194097784,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.1818399711062106 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_cv",
            "value": 0.001213132352673529,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012072765062222507 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_mean",
            "value": 149.46355859519898,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.44112950666258 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_median",
            "value": 149.32948846517704,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.32664425336037 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_stddev",
            "value": 0.2871429400450555,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.29212305130175464 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_cv",
            "value": 0.0019211568541783598,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0019547700975368417 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_mean",
            "value": 152.02960615866635,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.01975668433485 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_median",
            "value": 152.16550420195435,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.16495937132606 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_stddev",
            "value": 0.34282664114746186,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.35364815552755297 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_cv",
            "value": 0.002254999205810409,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002326330229970663 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_mean",
            "value": 149.9524684347139,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.9461666964944 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_median",
            "value": 150.2168679279018,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.2093506917307 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_stddev",
            "value": 0.7406371473062534,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.7412532451855677 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_cv",
            "value": 0.0049391460843387905,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004943462454001482 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_mean",
            "value": 152.8410778672439,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.83535827875627 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_median",
            "value": 152.82076208637628,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.8179124651533 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_stddev",
            "value": 0.20138450224588042,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.19696630454655462 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_cv",
            "value": 0.001317607184246638,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012887482763465502 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_mean",
            "value": 150.38916768040636,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.3846216637651 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_median",
            "value": 150.3822563574474,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.37510909816953 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_stddev",
            "value": 0.31042870892907165,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.31063363627239315 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_cv",
            "value": 0.0020641693395681737,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0020655944260505443 ns\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_mean",
            "value": 0.0018815945335671012,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.001881503525274137 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_median",
            "value": 0.001875878401543996,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0018757143090186227 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_stddev",
            "value": 0.00006246980117056613,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00006246414425171034 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_cv",
            "value": 0.033200458470793254,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.033199057781520366 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_mean",
            "value": 0.014054891546572456,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.01405260356661156 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_median",
            "value": 0.013978491877453939,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.013976436823536385 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_stddev",
            "value": 0.00022275200681204244,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00022450093556309215 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_cv",
            "value": 0.01584871758518582,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.01597575385222548 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_mean",
            "value": 0.029214563898579085,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029204666326328024 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_median",
            "value": 0.029271903726707477,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029250432357695876 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_stddev",
            "value": 0.00018152119349030575,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00017962262401076238 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_cv",
            "value": 0.00621338022092243,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.006150476845161983 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_mean",
            "value": 0.1798462908040039,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.1798257844202891 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_median",
            "value": 0.1796606586438925,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.17965514104554836 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_stddev",
            "value": 0.0007570982996042771,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.000756687657277375 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_cv",
            "value": 0.004209696492597455,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.004207892987742199 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_mean",
            "value": 0.353235607411212,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3531932679303315 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_median",
            "value": 0.35405359836066963,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3540065256147644 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_stddev",
            "value": 0.002085936277465313,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0021144960124205264 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_cv",
            "value": 0.005905226522186401,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.005986795911516687 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_mean",
            "value": 48.520958399999216,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 48.51589740000009 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_median",
            "value": 48.666110399998765,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 48.661765266666634 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_stddev",
            "value": 0.44092166510293623,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.4393522268682737 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_cv",
            "value": 0.009087241465183906,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.009055840464949802 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_mean",
            "value": 246.13777022222567,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 246.1215223333334 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_median",
            "value": 246.923019999997,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 246.89928466667274 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_stddev",
            "value": 1.5412721387953903,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1.541966416374778 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_cv",
            "value": 0.006261827014211803,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.006265061266305772 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_mean",
            "value": 0.029357673237605287,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.02935598868415219 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_median",
            "value": 0.02930431436752975,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029302284653054456 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_stddev",
            "value": 0.00011020235394549119,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00010965809825831 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_cv",
            "value": 0.003753783654909309,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00373545920861827 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_mean",
            "value": 0.1695742714910137,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.16943048186821955 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_median",
            "value": 0.16938162797474576,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.16896097425934734 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_stddev",
            "value": 0.0007961601215774162,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0008792928783839866 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_cv",
            "value": 0.0046950525841982305,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.005189697088082929 ms\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_mean",
            "value": 410.623460735063,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 410.6056217985322 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_median",
            "value": 408.0751824943424,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 408.03705590667886 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_stddev",
            "value": 5.25754706503662,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.265129865614893 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_cv",
            "value": 0.012803815582346435,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012822839206517936 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_mean",
            "value": 410.55649664959066,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 410.5447787114753 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_median",
            "value": 407.7912485191849,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 407.785588481637 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_stddev",
            "value": 5.759680139897021,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.756285094316131 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_cv",
            "value": 0.014028958710676305,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014021089520082682 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_mean",
            "value": 413.3104552635328,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 413.29719948298066 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_median",
            "value": 416.07809599777016,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 416.0652532110027 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_stddev",
            "value": 5.742582002720007,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.743028635725479 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_cv",
            "value": 0.013894112596446306,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013895638883858377 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_mean",
            "value": 415.0038216274115,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 414.98711211160463 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_median",
            "value": 417.1218883007071,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 417.1077664036802 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_stddev",
            "value": 7.023041359512642,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7.027969575501053 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_cv",
            "value": 0.016922835389737434,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01693539237818784 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_mean",
            "value": 410.1428965988861,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 410.1237580525473 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_median",
            "value": 407.2590273477869,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 407.2295334812149 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_stddev",
            "value": 5.521721588256651,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.520412780822141 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_cv",
            "value": 0.01346292142091349,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013460358422139579 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_mean",
            "value": 68730.89142183372,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 68727.45913989036 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_median",
            "value": 68857.30431364737,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 68853.96059742679 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_stddev",
            "value": 317.4350002222152,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 317.0077600187733 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_cv",
            "value": 0.004618520051980234,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004612534261939237 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_mean",
            "value": 318920.9027652543,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 318904.44349263277 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_median",
            "value": 316258.9364292192,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 316239.6744815154 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_stddev",
            "value": 4843.449462256076,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4836.874704786856 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_cv",
            "value": 0.015186992825682413,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015167159954917953 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_mean",
            "value": 1736896.8516707215,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1736795.69926647 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_median",
            "value": 1714472.4303178461,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1714298.1638141528 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_stddev",
            "value": 41901.395875378475,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 41925.02858487807 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_cv",
            "value": 0.02412428569668574,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.024139297789938657 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_mean",
            "value": 7776449.81111107,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7776203.170370385 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_median",
            "value": 7776439.822221923,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7776179.677777703 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_stddev",
            "value": 4508.524966651708,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4467.096329448886 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_cv",
            "value": 0.0005797664842136423,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005744572552411997 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_mean",
            "value": 25836580.641975224,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25835890.66666669 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_median",
            "value": 25839283.592591543,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25838655.70370373 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_stddev",
            "value": 64143.00482245233,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 64109.99544789625 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_cv",
            "value": 0.0024826429515306227,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00248143159742546 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_mean",
            "value": 667.2597280950423,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 667.2407855541054 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_median",
            "value": 667.236485590648,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 667.21830517723 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_stddev",
            "value": 0.15713152546296333,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.15134407857616008 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_cv",
            "value": 0.00023548780009780844,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00022682078471938355 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_mean",
            "value": 2505.90740296349,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2505.8376426849286 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_median",
            "value": 2506.1567842290365,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2506.1072389227547 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_stddev",
            "value": 0.9430306900656958,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.0081650562366657 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_cv",
            "value": 0.0003763230392912628,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004023265669983502 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_mean",
            "value": 10018.880927181543,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10016.66291941995 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_median",
            "value": 10014.947667267497,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10014.745759318095 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_stddev",
            "value": 8.229233700567391,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.750675436346189 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_cv",
            "value": 0.0008213725425402769,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00047427725925924363 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_mean",
            "value": 40352.92627278569,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40351.22463097811 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_median",
            "value": 40376.33651289135,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40374.05231818672 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_stddev",
            "value": 46.697222039407556,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 46.43340532852712 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_cv",
            "value": 0.0011572202155485435,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00115073100638635 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_mean",
            "value": 168709.3656536348,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 168701.6899823126 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_median",
            "value": 168609.49276410686,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 168597.683309212 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_stddev",
            "value": 259.8962802298218,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 260.28086250526707 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_cv",
            "value": 0.0015404970507884926,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015428467997715737 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_mean",
            "value": 671595.6941480471,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 671555.4477853326 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_median",
            "value": 671550.4917555306,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 671526.1949563569 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_stddev",
            "value": 429.71261640555736,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 430.4750015502456 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_cv",
            "value": 0.0006398382541011813,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006410118523643485 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_mean",
            "value": 746.3331510876841,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 746.3005117088401 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_median",
            "value": 746.2509735754433,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 746.176699414047 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_stddev",
            "value": 0.5375098138595925,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5507639078448735 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_cv",
            "value": 0.0007202009090394035,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007379921348087554 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_mean",
            "value": 2916.7901343597664,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2916.7145479591327 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_median",
            "value": 2917.1356955993047,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2917.0235698933425 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_stddev",
            "value": 1.0432888576520554,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.0274186970551187 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_cv",
            "value": 0.0003576838955131259,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00035225205626447697 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_mean",
            "value": 11645.507150228603,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11645.08463466332 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_median",
            "value": 11643.77651141437,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11643.44347293522 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_stddev",
            "value": 7.4181505834400445,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7.13366405683767 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_cv",
            "value": 0.0006369967823423151,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006125901425914296 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_mean",
            "value": 46922.16506829552,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 46920.66018375474 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_median",
            "value": 46921.96351686737,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 46919.47253705095 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_stddev",
            "value": 6.832154286339839,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7.101269871889681 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_cv",
            "value": 0.00014560611762896262,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00015134633323740703 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_mean",
            "value": 194629.98900896046,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 194620.56719312645 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_median",
            "value": 194547.82903851653,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 194544.38016070623 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_stddev",
            "value": 251.35345361231566,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 248.08938580013478 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_cv",
            "value": 0.001291442572093778,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012747336490595569 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_mean",
            "value": 775491.6473484783,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 775436.6602272731 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_median",
            "value": 775416.686363622,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 775369.1056818598 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_stddev",
            "value": 130.1640835378012,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 119.97138217370248 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_cv",
            "value": 0.00016784717666895786,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00015471461220125963 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_mean",
            "value": 14.342573847972403,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.341884781594773 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_median",
            "value": 14.337750595756447,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.337382945673548 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_stddev",
            "value": 0.008687813979724979,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00844103941280708 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_cv",
            "value": 0.0006057360465292754,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005885585849664357 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_mean",
            "value": 14.341240509584246,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.340754724671283 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_median",
            "value": 14.344838766554401,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.344499349726343 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_stddev",
            "value": 0.006746103962614152,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00649784744597708 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_cv",
            "value": 0.0004703989141040996,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000453103589785162 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_mean",
            "value": 14.341575085403308,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.341212561690197 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_median",
            "value": 14.342588452908608,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.342049163804331 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_stddev",
            "value": 0.003509278399770806,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00329070407634482 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_cv",
            "value": 0.0002446926769809621,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0002294578692136051 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_mean",
            "value": 14.349766552135591,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.348839767467723 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_median",
            "value": 14.35154068611012,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.350625314842999 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_stddev",
            "value": 0.0037873694180678695,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003897140326416692 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_cv",
            "value": 0.00026393247613524536,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00027159968259262665 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_mean",
            "value": 14.354979790743087,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.354215178760038 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_median",
            "value": 14.361087626381732,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.360168525935704 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_stddev",
            "value": 0.014404041083533672,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014387746777074 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_cv",
            "value": 0.0010034177193911635,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010023360105652851 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_mean",
            "value": 14.344947309444969,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.344253832585174 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_median",
            "value": 14.34375375578218,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.343472263794387 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_stddev",
            "value": 0.0032680129449979335,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003282431926389971 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_cv",
            "value": 0.00022781630873235873,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0002288325321553794 ns\nthreads: 1"
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
          "id": "eb62ed5a37987691c6a36db3c4fb5e0f90aba172",
          "message": "Benchmark: v3.3.0\n\nAdd git config for data.js update step\n\nConfigure git user.name and user.email before committing on gh-pages\nbranch to fix \"Author identity unknown\" error.\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-20T16:20:12Z",
          "url": "https://github.com/zalo/manifold-benchmarks/commit/eb62ed5a37987691c6a36db3c4fb5e0f90aba172"
        },
        "date": 1768927994568,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SphereCreation/16_mean",
            "value": 45005.11321559467,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 44998.6443136251 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_median",
            "value": 44744.96397491605,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 44736.28903250577 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_stddev",
            "value": 516.1248202881112,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 519.4692229343606 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_cv",
            "value": 0.011468137360651488,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011544108291659598 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_mean",
            "value": 190391.3213747838,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 189438.3748782 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_median",
            "value": 187375.98113206797,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 186425.4841881477 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_stddev",
            "value": 5686.1739060610635,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5622.497486102323 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_cv",
            "value": 0.029865720060148513,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02967982326557291 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_mean",
            "value": 1116949.8168264104,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1116825.7795527158 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_median",
            "value": 1117054.3306709183,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1116953.2731629391 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_stddev",
            "value": 1189.3221335827627,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1127.8718940432177 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_cv",
            "value": 0.0010647946001387815,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010098906335193351 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_mean",
            "value": 3652957.7395834066,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3652704.9010416646 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_median",
            "value": 3655886.145833343,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3655599.2239583335 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_stddev",
            "value": 6745.844121731454,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6772.264975583737 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_cv",
            "value": 0.0018466800337254292,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0018540410898379577 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_mean",
            "value": 9490612.479452075,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9490268.89954338 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_median",
            "value": 9486214.835616564,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9485779.32876713 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_stddev",
            "value": 16640.50134537865,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 16709.67012748783 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_cv",
            "value": 0.00175336432515885,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017607161930144897 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_mean",
            "value": 28569340.16666754,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 28565364.750000004 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_median",
            "value": 28327674.708333936,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 28325541.750000056 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_stddev",
            "value": 425707.4750738813,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 421598.4442917628 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_cv",
            "value": 0.014900850792856718,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014759077924666188 ns\nthreads: 1"
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
            "value": 4202.670873311526,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4202.154872965361 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_median",
            "value": 4198.549740053325,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4198.501258974341 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_stddev",
            "value": 10.031791974815961,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.84453525396996 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_cv",
            "value": 0.0023870039499218113,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00234273498992266 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_mean",
            "value": 4197.370357050887,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4197.197140157076 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_median",
            "value": 4195.548666678945,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4195.535947829949 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_stddev",
            "value": 7.836982685135773,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7.850105628249154 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_cv",
            "value": 0.0018671172706909078,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001870320922775472 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_mean",
            "value": 4202.219022834114,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4202.047928859262 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_median",
            "value": 4196.701045764343,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4196.530059723683 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_stddev",
            "value": 14.029037953054639,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.14466494911004 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_cv",
            "value": 0.003338483281528956,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003366136033805288 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_mean",
            "value": 19049.581115164056,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19047.852503039212 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_median",
            "value": 19041.629552012073,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19040.002830548125 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_stddev",
            "value": 16.820674062557647,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 16.410955599408492 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_cv",
            "value": 0.000882994432311578,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008615646092802331 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_mean",
            "value": 38557.934390546194,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38555.739738806034 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_median",
            "value": 38361.45429104545,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38360.22152107115 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_stddev",
            "value": 382.7280105947552,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 382.5393042935537 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_cv",
            "value": 0.009926050672688374,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009921721302328719 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_mean",
            "value": 78237.56799642187,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78233.61545051579 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_median",
            "value": 78230.21164375685,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78225.28226617498 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_stddev",
            "value": 16.71308633521846,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19.034755705081597 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_cv",
            "value": 0.00021361970678821223,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00024330660925572884 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_mean",
            "value": 159178.48570995097,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 159169.39079675524 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_median",
            "value": 159032.15169433015,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 159018.4409824876 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_stddev",
            "value": 267.1334799475788,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 264.7527166394755 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_cv",
            "value": 0.0016782009123666331,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016633393852561796 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_mean",
            "value": 459851.97242286225,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 459824.8297220383 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_median",
            "value": 459805.6323046722,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 459770.10505580925 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_stddev",
            "value": 165.72885907228152,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 154.07634220036536 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_cv",
            "value": 0.00036039610355282676,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00033507616866514946 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_mean",
            "value": 153.988605006388,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153.97913218259535 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_median",
            "value": 153.06587589132081,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153.05753390647362 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_stddev",
            "value": 4.484026049223132,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.483728417482839 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_cv",
            "value": 0.02911920689869954,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.029119065381962492 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_mean",
            "value": 151.1742054881238,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.16710354695692 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_median",
            "value": 148.89421774101632,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.8851012572369 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_stddev",
            "value": 6.215294954038023,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.21913748219217 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_cv",
            "value": 0.04111346200874392,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04114081262568032 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_mean",
            "value": 148.2691770996472,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.26167083537294 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_median",
            "value": 149.01707879947952,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.008442260757 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_stddev",
            "value": 1.315300194737362,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.3153985312379264 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_cv",
            "value": 0.008871029167804639,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008872141557736263 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_mean",
            "value": 149.79384481220603,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.78562016895015 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_median",
            "value": 149.78093413644604,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.77235841970852 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_stddev",
            "value": 0.3055379861125216,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3000555329523898 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_cv",
            "value": 0.0020397232375974415,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0020032332383705673 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_mean",
            "value": 150.844045932348,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.83238227848065 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_median",
            "value": 150.00682830957064,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.9967679849013 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_stddev",
            "value": 2.627058067399831,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.6334213162663245 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_cv",
            "value": 0.01741572265025322,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.017459256934656508 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_mean",
            "value": 146.64809418606248,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.63968433849246 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_median",
            "value": 146.68672209136147,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.6750514515671 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_stddev",
            "value": 0.3680583369671713,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3678817291835405 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_cv",
            "value": 0.002509806479313604,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0025087460522238226 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_mean",
            "value": 146.47727911722566,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.47227539995592 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_median",
            "value": 146.2403052324009,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.2339838884193 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_stddev",
            "value": 0.5136625875369937,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5119765294446851 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_cv",
            "value": 0.0035067731366440103,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0034953818259918913 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_mean",
            "value": 147.0779755598757,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.06945020713684 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_median",
            "value": 146.26942811179381,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.25798792659023 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_stddev",
            "value": 1.710181942035504,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.7088869950308834 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_cv",
            "value": 0.011627722883221801,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011619591918131455 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_mean",
            "value": 146.18012011687298,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.1715230201981 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_median",
            "value": 146.2121603734526,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.20228949077588 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_stddev",
            "value": 0.2947076050579708,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.29843651675659133 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_cv",
            "value": 0.002016058030478755,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0020416871261261546 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_mean",
            "value": 146.36530603274426,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.3563112171542 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_median",
            "value": 146.60629303059875,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.59541841343355 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_stddev",
            "value": 0.4617431249857659,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.4605788508763522 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_cv",
            "value": 0.003154730704300011,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00314696952284466 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_mean",
            "value": 148.55541990544586,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.5505670608711 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_median",
            "value": 149.2297672551765,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.22188977966513 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_stddev",
            "value": 1.41871830728253,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.4170139351721955 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_cv",
            "value": 0.009550094558552834,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009538933194321302 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_mean",
            "value": 149.64226602365792,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.6290431098369 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_median",
            "value": 149.54402204670492,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.5255082933742 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_stddev",
            "value": 0.1751306921765573,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.1862199880988498 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_cv",
            "value": 0.0011703290576264712,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012445444028012188 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_mean",
            "value": 146.70088200200772,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.68823675810512 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_median",
            "value": 146.684527598227,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 146.67096717324287 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_stddev",
            "value": 0.10027086094218125,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.10831677116551987 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_cv",
            "value": 0.0006835055084454703,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007384148419763109 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_mean",
            "value": 148.93443352252132,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.92592969651247 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_median",
            "value": 149.6995591055988,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.6944379491105 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_stddev",
            "value": 1.4604058318148023,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.462228913293539 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_cv",
            "value": 0.009805696354254875,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009818497801379052 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_mean",
            "value": 147.00996900296363,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.0033491072164 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_median",
            "value": 147.22477140599446,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.219606664255 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_stddev",
            "value": 0.4553252983352469,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.4565973372074903 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_cv",
            "value": 0.003097240965516208,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0031060335698506604 ns\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_mean",
            "value": 0.0019433261955896092,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0019432239002582583 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_median",
            "value": 0.0019735000383038492,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0019734054143298926 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_stddev",
            "value": 0.00005657450837635109,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00005660289801666348 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_cv",
            "value": 0.029112203861990482,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029128345945694082 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_mean",
            "value": 0.014048124657768177,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.014045733632127645 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_median",
            "value": 0.013991166008529003,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.013990772607013145 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_stddev",
            "value": 0.00016721449657228105,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00016922778710987696 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_cv",
            "value": 0.011902976421825572,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.012048340908501369 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_mean",
            "value": 0.028799749321644957,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.028796414471578834 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_median",
            "value": 0.028682819077436236,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.028680719724483786 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_stddev",
            "value": 0.00031817812274476814,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00031807990808246375 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_cv",
            "value": 0.011047947646739959,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.011045816429555794 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_mean",
            "value": 0.17691355552740204,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.17689708943501484 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_median",
            "value": 0.17664681758297585,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.17662847631112474 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_stddev",
            "value": 0.0010391954364128413,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.001050692437966414 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_cv",
            "value": 0.00587402945644762,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0059395688268370165 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_mean",
            "value": 0.35439817797041867,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.35436334251232277 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_median",
            "value": 0.35359935237124485,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.35354905507393647 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_stddev",
            "value": 0.002368772744268264,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.002363483215488013 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_cv",
            "value": 0.0066839303684738,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.006669660576998943 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_mean",
            "value": 47.99026764444534,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 47.985462622222656 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_median",
            "value": 47.982952066672624,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 47.97772846666627 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_stddev",
            "value": 0.046124149661275295,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.04661429021463121 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_cv",
            "value": 0.0009611146577261059,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0009714252539693878 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_mean",
            "value": 241.78822199999354,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 241.77580722222083 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_median",
            "value": 241.9303953333459,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 241.91968366667047 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_stddev",
            "value": 0.363325177668101,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3694432412525271 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_cv",
            "value": 0.0015026587096046006,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0015280405657500903 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_mean",
            "value": 0.029427281722853606,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029425722977859378 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_median",
            "value": 0.02969324541054826,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.02969211974299028 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_stddev",
            "value": 0.0004853503929194599,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0004854298540642481 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_cv",
            "value": 0.01649321189400007,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.016496785972922305 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_mean",
            "value": 0.1665481752026212,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.16654154293843879 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_median",
            "value": 0.16663457630626274,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.16662791748577416 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_stddev",
            "value": 0.0015322603149341748,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0015353375215177729 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_cv",
            "value": 0.009200102691428702,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.009218946182606836 ms\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_mean",
            "value": 411.2282095345813,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 411.2050075489949 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_median",
            "value": 411.32421757533774,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 411.3027845906635 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_stddev",
            "value": 0.2033423282296599,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.20112930122287787 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_cv",
            "value": 0.0004944756305988786,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000489121721599933 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_mean",
            "value": 411.68924425989917,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 411.6575217289115 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_median",
            "value": 411.48663363635956,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 411.45539228385996 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_stddev",
            "value": 0.6799932840327444,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6826626722742423 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_cv",
            "value": 0.001651714961014296,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016583267309367802 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_mean",
            "value": 411.6831213770822,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 411.65558808089537 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_median",
            "value": 411.6029711445337,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 411.5811478231158 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_stddev",
            "value": 0.3573413796487035,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3432102176297544 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_cv",
            "value": 0.0008680010452053383,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008337314676809619 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_mean",
            "value": 411.78489507196554,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 411.76166845590683 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_median",
            "value": 411.5126804806038,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 411.4844765364142 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_stddev",
            "value": 0.5435492358683227,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5475532666606009 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_cv",
            "value": 0.0013199834242908046,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013297820283124176 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_mean",
            "value": 411.4018276383397,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 411.38009934980664 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_median",
            "value": 411.37371993888377,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 411.3528192061858 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_stddev",
            "value": 0.06475135632780608,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06715283484310082 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_cv",
            "value": 0.0001573919996892394,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00016323792752550992 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_mean",
            "value": 68057.88560177296,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 68053.19563236361 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_median",
            "value": 67943.8235696183,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 67941.45840656277 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_stddev",
            "value": 315.36754857879663,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 315.33777189696565 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_cv",
            "value": 0.00463381349259227,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004633695287440735 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_mean",
            "value": 313991.18891387724,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 313971.6103370777 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_median",
            "value": 314162.9065168999,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 314137.0026966332 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_stddev",
            "value": 366.6635444851548,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 364.854630089453 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_cv",
            "value": 0.0011677510625488434,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011620624861520049 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_mean",
            "value": 1690621.2053789294,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1690535.149144239 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_median",
            "value": 1690661.5378972224,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1690588.3691931444 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_stddev",
            "value": 2429.5811656442493,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2448.303058906205 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_cv",
            "value": 0.0014370937486849352,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014482414400821854 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_mean",
            "value": 7721318.6777780885,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7720861.600000086 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_median",
            "value": 7730231.966667765,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7729919.133333535 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_stddev",
            "value": 21075.74006679546,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 21077.118722148836 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_cv",
            "value": 0.0027295518999172147,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0027298920527404095 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_mean",
            "value": 25733954.160493594,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25710243.666666508 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_median",
            "value": 25658756.037037835,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25657598.407407165 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_stddev",
            "value": 174092.2961472933,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 141116.85937623752 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_cv",
            "value": 0.0067650814585874,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005488740643839032 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_mean",
            "value": 646.7340902618479,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 646.6958104787592 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_median",
            "value": 646.6862778277292,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 646.646013411284 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_stddev",
            "value": 0.16451371342717905,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.15420047357531322 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_cv",
            "value": 0.0002543761275373179,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0002384435944639198 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_mean",
            "value": 2526.569084239494,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2526.4170634677707 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_median",
            "value": 2524.2278401164917,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2524.110306495106 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_stddev",
            "value": 4.724955214253743,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.6700024911560325 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_cv",
            "value": 0.001870107270657106,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001848468552039451 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_mean",
            "value": 10064.539169578888,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10063.932802155281 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_median",
            "value": 10062.573542735418,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10061.774805482633 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_stddev",
            "value": 4.965881213034219,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.061608290823607 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_cv",
            "value": 0.0004934037345737706,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005029453584725463 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_mean",
            "value": 40568.74115693644,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40565.82103413609 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_median",
            "value": 40565.6080282675,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40563.141682113936 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_stddev",
            "value": 8.593653760211904,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8.362628912560453 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_cv",
            "value": 0.0002118294409720071,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00020614962792256343 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_mean",
            "value": 168275.24292832462,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 168265.3848441019 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_median",
            "value": 168316.2403567921,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 168307.40429122382 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_stddev",
            "value": 72.65262219222906,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 73.07418777260895 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_cv",
            "value": 0.00043174872861823663,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004342793845585786 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_mean",
            "value": 673225.2310167185,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 673180.7828185315 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_median",
            "value": 673414.8021235589,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 673373.7538609955 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_stddev",
            "value": 447.6235745517136,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 428.67117725650996 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_cv",
            "value": 0.0006648942343941913,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006367846322970071 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_mean",
            "value": 745.5075344828638,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 745.4681130743861 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_median",
            "value": 745.4600081361826,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 745.4108950220289 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_stddev",
            "value": 0.6613942074698266,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6526692886406612 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_cv",
            "value": 0.0008871730691878465,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008755160377671781 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_mean",
            "value": 2921.836225018708,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2921.6397921492867 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_median",
            "value": 2922.2634821260813,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2922.098328429284 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_stddev",
            "value": 0.9513547213195662,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.9705452397637994 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_cv",
            "value": 0.00032560165870127605,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00033219195684962364 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_mean",
            "value": 11654.426261279694,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11653.754557823237 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_median",
            "value": 11655.181974176514,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11654.598150770775 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_stddev",
            "value": 6.699556946429837,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.400664367295519 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_cv",
            "value": 0.0005748508589125694,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005492362427522308 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_mean",
            "value": 46959.09687297408,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 46956.39752788411 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_median",
            "value": 46956.15986052415,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 46953.16502380496 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_stddev",
            "value": 37.030694360764144,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 36.58433036426961 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_cv",
            "value": 0.000788573393158165,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000779112800179033 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_mean",
            "value": 193608.93453204108,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 193594.69617335332 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_median",
            "value": 193592.16016596765,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 193575.1106500721 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_stddev",
            "value": 48.86966675499787,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 51.30728414260079 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_cv",
            "value": 0.00025241431586366304,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0002650242240968108 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_mean",
            "value": 775531.5354767349,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 775477.1969697025 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_median",
            "value": 775417.1884700499,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 775351.962305985 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_stddev",
            "value": 384.42749136259613,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 368.37581927845355 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_cv",
            "value": 0.000495695498863603,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004750311430406197 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_mean",
            "value": 14.43467869978629,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.433579374554768 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_median",
            "value": 14.433191011231697,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.431756067614911 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_stddev",
            "value": 0.007815238852659516,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007892202295770137 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_cv",
            "value": 0.0005414210468553916,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000546794533148406 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_mean",
            "value": 14.485965285871151,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.484771124153779 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_median",
            "value": 14.462433356270083,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.461237525515594 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_stddev",
            "value": 0.07366961209575147,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07345241904219764 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_cv",
            "value": 0.00508558529873083,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005071009987842582 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_mean",
            "value": 14.462748561202424,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.461643752012796 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_median",
            "value": 14.461109120830303,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.459977371609385 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_stddev",
            "value": 0.016286422404741634,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.016446609820396328 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_cv",
            "value": 0.0011260945549749356,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011372572926301868 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_mean",
            "value": 14.436427820062475,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.435581372336124 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_median",
            "value": 14.436132299373275,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.4351518825422 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_stddev",
            "value": 0.011372333618838765,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011082519465837921 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_cv",
            "value": 0.0007877526047707245,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007677224200388699 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_mean",
            "value": 14.439446990745708,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.438248087880014 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_median",
            "value": 14.435684343515234,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.434584619911798 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_stddev",
            "value": 0.010545028517742727,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01055241230380199 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_cv",
            "value": 0.0007302931008715966,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007308651464896261 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_mean",
            "value": 14.430638970065026,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.429536569645615 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_median",
            "value": 14.4255873154292,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.424569190971411 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_stddev",
            "value": 0.016332481042178368,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015897830163322708 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_cv",
            "value": 0.0011317919515593544,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011017561157692227 ns\nthreads: 1"
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
          "id": "eb62ed5a37987691c6a36db3c4fb5e0f90aba172",
          "message": "Benchmark: v3.3.2\n\nAdd git config for data.js update step\n\nConfigure git user.name and user.email before committing on gh-pages\nbranch to fix \"Author identity unknown\" error.\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-20T16:20:12Z",
          "url": "https://github.com/zalo/manifold-benchmarks/commit/eb62ed5a37987691c6a36db3c4fb5e0f90aba172"
        },
        "date": 1768928309770,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SphereCreation/16_mean",
            "value": 43438.228870014624,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43435.17120492963 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_median",
            "value": 43470.77154634089,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43469.56126655008 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_stddev",
            "value": 265.3173380246264,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 265.8741799395463 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/16_cv",
            "value": 0.006107922558688269,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006121172601925216 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_mean",
            "value": 177257.27460277907,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 176223.29589884376 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_median",
            "value": 176678.72548041155,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 175458.24731719494 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_stddev",
            "value": 2081.6938969012895,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2226.3562510781235 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/32_cv",
            "value": 0.011743912353195192,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012633722685314566 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_mean",
            "value": 1062162.4625126559,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1062102.1225937186 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_median",
            "value": 1061446.8343464856,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1061405.1367781155 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_stddev",
            "value": 1243.695994406495,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1244.0668553820972 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/64_cv",
            "value": 0.001170909383734389,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011713250815693782 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_mean",
            "value": 3552970.8418367277,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3552526.2738095284 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_median",
            "value": 3554380.6785714845,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3553643.7806122513 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_stddev",
            "value": 5514.082726913078,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5326.033497676505 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/128_cv",
            "value": 0.001551963968289293,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014992242385205973 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_mean",
            "value": 9965133.637681192,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9964640.120772943 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_median",
            "value": 9966058.492753858,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9965703.115942027 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_stddev",
            "value": 3458.73399105287,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3566.7472413315386 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/256_cv",
            "value": 0.0003470835531973548,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003579403970541859 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_mean",
            "value": 32691801.0757575,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32685932.333333317 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_median",
            "value": 32754725.454545695,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32744955.59090905 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_stddev",
            "value": 229389.06452320958,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 227069.8585108828 ns\nthreads: 1"
          },
          {
            "name": "BM_SphereCreation/512_cv",
            "value": 0.0070167154141076785,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006947021005710016 ns\nthreads: 1"
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
            "value": 4259.048467676405,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4258.47878095099 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_median",
            "value": 4259.900946694499,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4258.845415797689 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_stddev",
            "value": 3.0066864248717473,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.0313766197814402 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/1_cv",
            "value": 0.000705952620095938,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007118449511457898 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_mean",
            "value": 4284.919929086759,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4284.675793699304 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_median",
            "value": 4283.101418266309,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4282.899400904739 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_stddev",
            "value": 3.6987666855388466,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.593752513329303 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/10_cv",
            "value": 0.0008632055550048894,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008387454935596257 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_mean",
            "value": 4280.846233722733,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4280.549582907465 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_median",
            "value": 4281.41169450336,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4281.135746329389 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_stddev",
            "value": 1.9693765375726102,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.0239727020174683 ns\nthreads: 1"
          },
          {
            "name": "BM_CubeCreation/100_cv",
            "value": 0.0004600437460375656,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00047283010342861884 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_mean",
            "value": 18943.119671983513,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 18941.464999549415 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_median",
            "value": 18936.77848067009,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 18934.82376317917 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_stddev",
            "value": 20.808431450490918,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 20.285730251249138 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/16_cv",
            "value": 0.0010984690911954784,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010709694446407233 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_mean",
            "value": 37961.769290499426,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 37959.30839518207 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_median",
            "value": 37943.74733192425,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 37941.5185546346 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_stddev",
            "value": 34.98784408069023,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 34.373318391626704 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/32_cv",
            "value": 0.0009216599946369342,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009055306812699854 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_mean",
            "value": 76720.20731796393,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 76714.61320892796 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_median",
            "value": 76724.71712403776,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 76719.68518111961 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_stddev",
            "value": 14.933754801736173,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 16.24954933596608 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/64_cv",
            "value": 0.00019465216953655777,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00021181817461180886 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_mean",
            "value": 154384.3533127661,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 154373.91685030123 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_median",
            "value": 154401.23137946668,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 154386.863596298 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_stddev",
            "value": 46.5758156135933,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 46.80558971491152 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/128_cv",
            "value": 0.0003016874094697647,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003031962307486155 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_mean",
            "value": 432169.16137071955,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 432129.7320872271 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_median",
            "value": 432134.5813084137,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 432094.89719626337 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_stddev",
            "value": 897.3780301213137,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 914.4441788262374 ns\nthreads: 1"
          },
          {
            "name": "BM_CylinderCreation/256_cv",
            "value": 0.0020764508676997724,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00211613344541091 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_mean",
            "value": 251.44107819231385,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.42719967127266 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_median",
            "value": 251.6586518931642,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.64593316957075 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_stddev",
            "value": 0.4570039349388036,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.45324920829224147 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/16_cv",
            "value": 0.001817538877196771,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0018027055500949782 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_mean",
            "value": 251.5834622741579,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.57357503805997 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_median",
            "value": 251.3947686900203,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.38562264701753 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_stddev",
            "value": 0.5728387947602808,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5688927400542154 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/32_cv",
            "value": 0.002276933426315763,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002261337423726435 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_mean",
            "value": 251.26237237119952,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.24631470004132 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_median",
            "value": 251.232166519535,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.2175638892406 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_stddev",
            "value": 0.23786566978158163,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.23166852932324145 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/64_cv",
            "value": 0.0009466824162201794,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000922077323203035 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_mean",
            "value": 250.37541372207306,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 250.3633267080585 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_median",
            "value": 250.3406375855554,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 250.3342085180682 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_stddev",
            "value": 0.5159061289732038,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5109841099842448 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_cv",
            "value": 0.002060530310479609,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002040970283879031 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_mean",
            "value": 252.09586270937766,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.08098815449554 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_median",
            "value": 250.60627896605945,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 250.58915398795236 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_stddev",
            "value": 2.7534026645130094,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.7572696011103464 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_cv",
            "value": 0.010922046220517314,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010938030754705187 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_mean",
            "value": 252.51692611191163,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.48046462450122 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_median",
            "value": 252.12689298519544,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.0833307652774 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_stddev",
            "value": 0.9854806011948628,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.0025605607409667 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/16_cv",
            "value": 0.003902631860638573,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0039708440897873575 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_mean",
            "value": 254.8958785058636,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 254.86461682850384 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_median",
            "value": 251.81646092826898,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.8023023703557 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_stddev",
            "value": 5.539743984236272,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.532353792464355 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/32_cv",
            "value": 0.02173336036937465,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.021707029643063504 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_mean",
            "value": 252.39940597387303,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.3876237444541 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_median",
            "value": 252.13473542486736,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.12827972402167 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_stddev",
            "value": 0.5765910181074804,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5783836205944223 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/64_cv",
            "value": 0.0022844388871785452,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0022916481086253404 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_mean",
            "value": 252.17345426865734,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 252.15727872463148 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_median",
            "value": 251.90949591828965,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.89516048559054 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_stddev",
            "value": 1.2387941653133858,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.2354538616779573 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_cv",
            "value": 0.00491246855822348,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0048995367808800615 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_mean",
            "value": 253.02130748888194,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 253.0079618944571 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_median",
            "value": 253.01853011179034,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 253.00437504507536 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_stddev",
            "value": 1.4234086315741161,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.426111749414205 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_cv",
            "value": 0.005625647285206059,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005636627949317701 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_mean",
            "value": 251.1947961309135,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.16922780234097 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_median",
            "value": 249.8458378144335,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 249.8314601691477 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_stddev",
            "value": 2.650633200116695,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.648982393497354 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/16_cv",
            "value": 0.010552102356194044,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010546604043318494 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_mean",
            "value": 250.65959588776425,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 250.64771210460492 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_median",
            "value": 250.3335064218478,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 250.31887942997204 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_stddev",
            "value": 0.8026292929497313,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.7993821291150822 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/32_cv",
            "value": 0.003202068885920959,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003189265612691766 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_mean",
            "value": 251.19456535579107,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.18156805190662 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_median",
            "value": 250.55280739440298,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 250.5324971932582 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_stddev",
            "value": 1.449217620046495,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.4505165275059078 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/64_cv",
            "value": 0.005769303241070636,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0057747729610723615 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_mean",
            "value": 250.89843472302894,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 250.89853435926588 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_median",
            "value": 251.1089974023173,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.1086477826826 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_stddev",
            "value": 0.5911480578125731,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5871720462405846 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/128_cv",
            "value": 0.002356124933442297,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0023402769081137913 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_mean",
            "value": 249.98925042017166,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 249.9768975990755 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_median",
            "value": 249.88698380317985,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 249.87194221907666 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_stddev",
            "value": 0.23714641487123267,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.23761591071464627 ns\nthreads: 1"
          },
          {
            "name": "BM_BooleanIntersection/256_cv",
            "value": 0.0009486264488278865,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009505514829444185 ns\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_mean",
            "value": 0.004053968512190352,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.004053735826907898 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_median",
            "value": 0.004058555542662883,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.004058265492013914 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_stddev",
            "value": 0.000013478001107588617,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.000013434654576517208 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/100_cv",
            "value": 0.003324643757606908,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.003314141609164717 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_mean",
            "value": 0.019377840852305185,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.019376382970620862 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_median",
            "value": 0.019366642488924186,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.019365323599074967 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_stddev",
            "value": 0.000037824055454673096,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.000037676666276708254 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/500_cv",
            "value": 0.001951923113775266,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0019444633363117825 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_mean",
            "value": 0.03880120846665936,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.03879619239398288 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_median",
            "value": 0.03883563190996369,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.03883273286991077 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_stddev",
            "value": 0.0001840497530723581,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00018585362687727856 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/1000_cv",
            "value": 0.004743402598671795,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.004790512042777261 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_mean",
            "value": 0.20772439225490136,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.2076831216666661 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_median",
            "value": 0.20782095852941793,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.20778525088235336 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_stddev",
            "value": 0.00023913234661519182,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00023749662557235134 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/5000_cv",
            "value": 0.0011512001263758633,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0011435528494873853 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_mean",
            "value": 0.5035737906799156,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.5034696916221092 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_median",
            "value": 0.5030466478227682,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.502934705882354 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_stddev",
            "value": 0.0034897166784066545,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.003493375067537619 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBooleanUnion/10000_cv",
            "value": 0.006929901323289496,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.006938600526840953 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_mean",
            "value": 48.750062119048756,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 48.732367619048006 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_median",
            "value": 48.698448357145345,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 48.68803721428654 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_stddev",
            "value": 0.1322248296555731,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.11303030110753565 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/1000_cv",
            "value": 0.0027123007419493543,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.002319409185925855 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_mean",
            "value": 243.62421144443638,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 243.60166699999772 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_median",
            "value": 243.44509666665695,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 243.41965100000115 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_stddev",
            "value": 0.4596699825706567,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.4564658545949006 ms\nthreads: 1"
          },
          {
            "name": "BM_LargeUnionMemory/5000_cv",
            "value": 0.0018867992628700374,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0018738207345473743 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_mean",
            "value": 0.038855642170215206,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.03885303428020823 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_median",
            "value": 0.0388759715381611,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.03887231491466996 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_stddev",
            "value": 0.00024740433765638197,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0002478549248251995 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_cv",
            "value": 0.006367269303453433,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.006379293906305201 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_mean",
            "value": 0.19489104512047448,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.19483410661456768 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_median",
            "value": 0.19500906530838968,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.19499631621546676 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_stddev",
            "value": 0.000518382397198074,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0004664590123627805 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_cv",
            "value": 0.0026598574443357777,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.002394134273859747 ms\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_mean",
            "value": 495.7223011018104,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 495.7022234125081 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_median",
            "value": 495.9274029107887,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 495.8903448549615 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_stddev",
            "value": 0.3691849126996627,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.37126016450403837 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/16_cv",
            "value": 0.0007447413841965531,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007489580376464987 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_mean",
            "value": 496.2974202368304,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 496.24788656638475 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_median",
            "value": 496.2501809998077,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 496.17088787213487 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_stddev",
            "value": 0.34574359276563893,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3457628820724794 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/32_cv",
            "value": 0.000696645959998446,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006967543669855519 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_mean",
            "value": 495.66236286745743,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 495.62872450803 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_median",
            "value": 495.7198820378638,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 495.68464555988766 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_stddev",
            "value": 0.14950863266376044,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.14977399926204013 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/64_cv",
            "value": 0.00030163402320651847,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00030218990921220007 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_mean",
            "value": 495.37906201197035,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 495.349724411811 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_median",
            "value": 495.16808137002954,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 495.1465402417391 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_stddev",
            "value": 0.40377619288974037,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.4034917591556986 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/128_cv",
            "value": 0.0008150853030602725,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008145593694128195 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_mean",
            "value": 495.88473246326834,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 495.8474403101737 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_median",
            "value": 495.9801652130093,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 495.95129693631674 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_stddev",
            "value": 0.41285138828402196,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.4098939046577002 ns\nthreads: 1"
          },
          {
            "name": "BM_Transform/256_cv",
            "value": 0.0008325551509384353,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008266532633531276 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_mean",
            "value": 66605.89695384091,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 66601.19530316156 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_median",
            "value": 66500.75317375826,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 66493.02490551615 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_stddev",
            "value": 229.68583838975348,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 230.2183425773427 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/16_cv",
            "value": 0.003448430978250017,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0034566698319664275 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_mean",
            "value": 369870.5338624324,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 369850.338977071 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_median",
            "value": 369718.1306878274,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 369698.5253968278 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_stddev",
            "value": 390.2421252751877,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 390.86660809558526 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/32_cv",
            "value": 0.001055077627298454,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010568237119280217 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_mean",
            "value": 1759045.9916247919,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1758961.6758793816 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_median",
            "value": 1758724.1608039998,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1758679.5829145953 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_stddev",
            "value": 2012.0557585527022,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1970.2784442872082 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/64_cv",
            "value": 0.00114383351437799,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011201372214674206 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_mean",
            "value": 8251372.168627528,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8251055.627450974 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_median",
            "value": 8263454.4823530195,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8263128.882352997 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_stddev",
            "value": 35969.98867577603,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 36063.839630756906 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_cv",
            "value": 0.004359273577858629,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004370815233722794 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_mean",
            "value": 32803728.45454614,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32802458.136363164 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_median",
            "value": 32742783.409092497,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32741952.45454466 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_stddev",
            "value": 304761.06596785365,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 304931.24469151814 ns\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_cv",
            "value": 0.009290439847108842,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009295987618485414 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_mean",
            "value": 629.4373912920602,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 629.3957678084262 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_median",
            "value": 627.3472680564654,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 627.2991473847402 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_stddev",
            "value": 4.235518533003411,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.233545120296354 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/16_cv",
            "value": 0.00672905453600249,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006726364136571298 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_mean",
            "value": 2417.4806184976983,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2417.321667534479 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_median",
            "value": 2415.0639532678288,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2414.940408906396 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_stddev",
            "value": 4.257651844724971,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.233931046269277 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/32_cv",
            "value": 0.0017611937866831033,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017514967507769167 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_mean",
            "value": 9705.160267774869,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9702.44868421064 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_median",
            "value": 9705.92580332402,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9698.864903047315 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_stddev",
            "value": 7.9226423761717655,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8.347170729777044 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/64_cv",
            "value": 0.0008163329772593455,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000860315885345612 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_mean",
            "value": 38717.51837299338,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38715.85366168643 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_median",
            "value": 38730.32612064023,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38728.72351964618 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_stddev",
            "value": 37.008152047746314,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 37.68944018081222 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/128_cv",
            "value": 0.0009558503128020882,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009734885483904503 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_mean",
            "value": 167543.84434866282,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 167536.34099617033 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_median",
            "value": 167572.7923850565,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 167558.93007662636 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_stddev",
            "value": 50.19568072668992,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 47.715654663021695 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/256_cv",
            "value": 0.0002995972840531908,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000284807787846533 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_mean",
            "value": 678721.136760774,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 678691.3064516071 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_median",
            "value": 678415.6844758508,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 678386.2116935286 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_stddev",
            "value": 1304.2420262867672,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1303.2019895429178 ns\nthreads: 1"
          },
          {
            "name": "BM_Volume/512_cv",
            "value": 0.001921616928730581,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0019201689739572938 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_mean",
            "value": 696.2132084715803,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 696.1760274944655 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_median",
            "value": 696.5743151443013,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 696.5225972860788 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_stddev",
            "value": 0.9232297114443582,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.9316029387581107 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/16_cv",
            "value": 0.0013260732491288908,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013381715284149405 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_mean",
            "value": 2717.7748894574966,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2717.6259362729056 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_median",
            "value": 2708.0464336646387,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2707.9683474319386 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_stddev",
            "value": 18.550999783459375,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 18.49233635478654 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/32_cv",
            "value": 0.006825804394403833,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006804592239117316 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_mean",
            "value": 10849.117885551406,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10848.299354798712 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_median",
            "value": 10848.428410458726,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10847.959806130737 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_stddev",
            "value": 6.046756268225217,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.148316555174639 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/64_cv",
            "value": 0.0005573500382255171,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000566753954153648 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_mean",
            "value": 43343.10981313246,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43340.139192781346 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_median",
            "value": 43316.8685950905,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43313.530008035625 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_stddev",
            "value": 67.87128825238848,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 67.21984414163292 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/128_cv",
            "value": 0.001565907212126811,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015509835776630115 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_mean",
            "value": 188034.4050017671,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 188024.8817603369 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_median",
            "value": 188489.1076352078,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 188480.98541887457 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_stddev",
            "value": 1872.1712095969997,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1869.9820885554755 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/256_cv",
            "value": 0.009956535398824518,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009945396965807008 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_mean",
            "value": 752604.0653594616,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 752572.3137254892 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_median",
            "value": 753017.2156862792,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 753000.7797001287 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_stddev",
            "value": 4237.35803471692,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4238.137840707354 ns\nthreads: 1"
          },
          {
            "name": "BM_SurfaceArea/512_cv",
            "value": 0.005630261952801249,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005631535685557085 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_mean",
            "value": 32.77676077389879,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.77530010328714 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_median",
            "value": 32.75604735217872,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.754558137864116 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_stddev",
            "value": 0.04173449300822827,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04180320150332922 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/16_cv",
            "value": 0.0012732952257278219,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012754483214979515 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_mean",
            "value": 32.81573444665379,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.81463901112746 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_median",
            "value": 32.83152074892746,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.83007805001548 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_stddev",
            "value": 0.028900196314019716,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02895490300051153 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/32_cv",
            "value": 0.0008806810757504365,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008823776178276075 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_mean",
            "value": 32.84724511051575,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.84571656718179 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_median",
            "value": 32.84516554890821,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.84345730807954 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_stddev",
            "value": 0.00732542424968341,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006674140144285162 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/64_cv",
            "value": 0.0002230148746123687,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0002031966673838291 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_mean",
            "value": 32.88005426610798,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.878022949102416 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_median",
            "value": 32.827264954142244,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.8254696522663 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_stddev",
            "value": 0.10464696728134344,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.10358780666718574 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/128_cv",
            "value": 0.0031826883993075154,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0031506701855992755 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_mean",
            "value": 32.81990787026188,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.81796223524849 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_median",
            "value": 32.850230339976754,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.84870944900366 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_stddev",
            "value": 0.055962345947561644,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.055652369260904 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/256_cv",
            "value": 0.001705134157255485,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016957899110850328 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_mean",
            "value": 32.79338598511824,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.79097510156001 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_median",
            "value": 32.773013448780326,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.77121315947404 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_stddev",
            "value": 0.059527015512767435,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.058872459255175404 ns\nthreads: 1"
          },
          {
            "name": "BM_BoundingBox/512_cv",
            "value": 0.0018152140660248077,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017953860497541164 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "id": "6c9bc45e9bb86783af3e8add1c9d97e3ba41f9cf",
          "message": "Fix benchmark compilation errors for v2.x and v3.x compatibility\n\n- Add missing <chrono> and <ctime> includes in full benchmark\n- Use brace initialization instead of glm::vec3 in minimal benchmark\n  for compatibility with both v2.x (glm) and v3.x (la) math libraries\n- Add extra include path for minimal benchmark to resolve manifold.h\n  directly when building against v3.x\n- Upgrade Google Benchmark from v1.8.3 to v1.9.1\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-21T02:29:18Z",
          "url": "https://github.com/zalo/manifold-benchmarks/commit/6c9bc45e9bb86783af3e8add1c9d97e3ba41f9cf"
        },
        "date": 1769312259328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_BooleanUnion/128_mean",
            "value": 151.30622420108097,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00015129197529643033 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_median",
            "value": 150.41998791325346,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00015036697389779791 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_stddev",
            "value": 2.525751764962556,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.000002529811942447888 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_cv",
            "value": 16692.979937202814,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.016721388807907106 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_mean",
            "value": 151.46634777680714,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0001514611903609999 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_median",
            "value": 150.9990560049226,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00015099257563497436 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_stddev",
            "value": 1.5127049451132848,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0000015137484096869795 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_cv",
            "value": 9987.06951951022,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00999429890970115 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_mean",
            "value": 149.4091884130804,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0001494048416449377 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_median",
            "value": 148.4065071168695,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00014840362662364237 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_stddev",
            "value": 1.8908774926107346,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0000018896375401921821 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_cv",
            "value": 12655.697502237374,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.012647766427027361 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_mean",
            "value": 150.39860155208194,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00015039441194849293 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_median",
            "value": 150.53339246548848,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0001505287809174939 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_stddev",
            "value": 1.8041466528245955,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0000018034438326124435 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_cv",
            "value": 11995.76747527026,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.01199142846630556 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBoolean/1000_mean",
            "value": 0.02961923485960043,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.029618712446243374 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBoolean/1000_median",
            "value": 0.02970153128425604,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.029700955392528816 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBoolean/1000_stddev",
            "value": 0.0002014431446880996,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.00020141380083048104 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBoolean/1000_cv",
            "value": 0.006801092116085037,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.006800221353174552 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBoolean/5000_mean",
            "value": 0.17658664986107575,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.17655982970447065 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBoolean/5000_median",
            "value": 0.17697609295277347,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.1769639916645615 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBoolean/5000_stddev",
            "value": 0.0009416244185410855,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0009315064827238884 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBoolean/5000_cv",
            "value": 0.005332364701872312,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.00527586871987282 ms\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_mean",
            "value": 6953359.413861483,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 6953.054211881196 us\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_median",
            "value": 6955762.55445544,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 6955.131188118838 us\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_stddev",
            "value": 9182.617914917766,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 9.23032551000659 us\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_cv",
            "value": 1.320601649989826,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0013275210042565258 us\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_mean",
            "value": 26033648.148148604,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 26031.51368148141 us\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_median",
            "value": 26036987.592592426,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 26031.559444444367 us\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_stddev",
            "value": 71750.85319623601,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 72.11014683054935 us\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_cv",
            "value": 2.7560813908187742,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0027701096337647032 us\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_mean",
            "value": 0.03140497016132637,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.031403498253410864 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_median",
            "value": 0.03133831625261328,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.03133747717879186 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_stddev",
            "value": 0.000497421426870249,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0004973498369323346 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_cv",
            "value": 0.015838939642833928,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.01583740234667376 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_mean",
            "value": 0.1796926038095223,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.179684391042472 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_median",
            "value": 0.17995967670528937,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.17995228391248386 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_stddev",
            "value": 0.0008952254879212695,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.000896007318230542 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_cv",
            "value": 0.0049819829472237285,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.004986561787766823 ms\nthreads: 1"
          },
          {
            "name": "BM_MemoryUsage/1000_mean",
            "value": 41.99959599999977,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 41.997303023529426 ms\nthreads: 1"
          },
          {
            "name": "BM_MemoryUsage/1000_median",
            "value": 41.98566847058855,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 41.982163117647616 ms\nthreads: 1"
          },
          {
            "name": "BM_MemoryUsage/1000_stddev",
            "value": 0.1728485178996785,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.1732161736162006 ms\nthreads: 1"
          },
          {
            "name": "BM_MemoryUsage/1000_cv",
            "value": 0.004115480489376123,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.004124459456816892 ms\nthreads: 1"
          },
          {
            "name": "BM_MemoryUsage/5000_mean",
            "value": 212.3370062666633,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 212.32982946666635 ms\nthreads: 1"
          },
          {
            "name": "BM_MemoryUsage/5000_median",
            "value": 212.2341393333424,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 212.21524966666533 ms\nthreads: 1"
          },
          {
            "name": "BM_MemoryUsage/5000_stddev",
            "value": 0.5813452697730767,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.5809640012735383 ms\nthreads: 1"
          },
          {
            "name": "BM_MemoryUsage/5000_cv",
            "value": 0.0027378424514613083,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0027361393485447316 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "id": "6c9bc45e9bb86783af3e8add1c9d97e3ba41f9cf",
          "message": "Fix benchmark compilation errors for v2.x and v3.x compatibility\n\n- Add missing <chrono> and <ctime> includes in full benchmark\n- Use brace initialization instead of glm::vec3 in minimal benchmark\n  for compatibility with both v2.x (glm) and v3.x (la) math libraries\n- Add extra include path for minimal benchmark to resolve manifold.h\n  directly when building against v3.x\n- Upgrade Google Benchmark from v1.8.3 to v1.9.1\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-21T02:29:18Z",
          "url": "https://github.com/zalo/manifold-benchmarks/commit/6c9bc45e9bb86783af3e8add1c9d97e3ba41f9cf"
        },
        "date": 1769918351363,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_BooleanUnion/128_mean",
            "value": 155.94739607361598,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0001559387970274725 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_median",
            "value": 154.868131263421,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00015486184363908674 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_stddev",
            "value": 2.9559796397010807,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.000002955275262804338 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/128_cv",
            "value": 18954.979141207918,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.018951507380704582 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_mean",
            "value": 154.8050418708236,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0001547981268903744 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_median",
            "value": 154.55419124698574,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00015454996894491223 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_stddev",
            "value": 1.4669396908186347,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.000001466856949170145 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanUnion/256_cv",
            "value": 9476.045954903177,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.009475934745702384 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_mean",
            "value": 154.55353637095732,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.00015454607419781335 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_median",
            "value": 152.49962125358962,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.000152491176554902 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_stddev",
            "value": 3.144580480508587,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0000031424681415609975 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/128_cv",
            "value": 20346.221473451165,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.020333535858948787 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_mean",
            "value": 152.0964652722343,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0001520921305345533 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_median",
            "value": 151.90167884292438,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0001518930450593433 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_stddev",
            "value": 0.9586750842967089,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 9.596912182641438e-7 ms\nthreads: 1"
          },
          {
            "name": "BM_BooleanDifference/256_cv",
            "value": 6303.072741242188,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.006309933425819918 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBoolean/1000_mean",
            "value": 0.02966165132858512,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.02966082104029178 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBoolean/1000_median",
            "value": 0.029679764501561613,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.02967955839701288 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBoolean/1000_stddev",
            "value": 0.00015343653016551976,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0001540442256633573 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBoolean/1000_cv",
            "value": 0.005172892381000111,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.00519352533950766 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBoolean/5000_mean",
            "value": 0.17409024992313582,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.17407482147616565 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBoolean/5000_median",
            "value": 0.17387264479755077,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.1738730814966682 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBoolean/5000_stddev",
            "value": 0.0010685074402965718,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0010571206845162652 ms\nthreads: 1"
          },
          {
            "name": "BM_BatchBoolean/5000_cv",
            "value": 0.0061376638885195355,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.006072794879534063 ms\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_mean",
            "value": 6866450.94705829,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 6865.985913725497 us\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_median",
            "value": 6865980.892154997,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 6864.943127450953 us\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_stddev",
            "value": 5134.560537300887,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 5.255166237163699 us\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/128_cv",
            "value": 0.7477750262674815,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.0007653913513947535 us\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_mean",
            "value": 24704091.94999905,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 24703.129478571336 us\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_median",
            "value": 24752161.96428067,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 24751.165607142666 us\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_stddev",
            "value": 208108.08055540014,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 208.1568113925461 us\nthreads: 1"
          },
          {
            "name": "BM_ConvexHull/256_cv",
            "value": 8.42403278681968,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 0.008426333658377623 us\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_mean",
            "value": 0.031007261792980727,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.031005502883970526 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_median",
            "value": 0.03109022959982339,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.031089031254191647 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_stddev",
            "value": 0.00021233635921426218,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.00021231371846460275 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/1000/real_time_cv",
            "value": 0.006847955831505568,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.006847614091573609 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_mean",
            "value": 0.16506133616707397,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.16490343154791282 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_median",
            "value": 0.16395170687956212,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.16393616191646476 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_stddev",
            "value": 0.0035764950407836233,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0034799824936640627 ms\nthreads: 1"
          },
          {
            "name": "BM_ParallelEfficiency/5000/real_time_cv",
            "value": 0.021667672901687397,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.021103153894362417 ms\nthreads: 1"
          },
          {
            "name": "BM_MemoryUsage/1000_mean",
            "value": 41.19809700000053,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 41.195295388235195 ms\nthreads: 1"
          },
          {
            "name": "BM_MemoryUsage/1000_median",
            "value": 41.209165647066634,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 41.20653082352904 ms\nthreads: 1"
          },
          {
            "name": "BM_MemoryUsage/1000_stddev",
            "value": 0.05004943302111572,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.05029318609534977 ms\nthreads: 1"
          },
          {
            "name": "BM_MemoryUsage/1000_cv",
            "value": 0.0012148481766309518,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0012208478085027352 ms\nthreads: 1"
          },
          {
            "name": "BM_MemoryUsage/5000_mean",
            "value": 210.6963362666799,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 210.61141273333232 ms\nthreads: 1"
          },
          {
            "name": "BM_MemoryUsage/5000_median",
            "value": 210.6505343333538,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 210.64815266666415 ms\nthreads: 1"
          },
          {
            "name": "BM_MemoryUsage/5000_stddev",
            "value": 0.23608798674790457,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.10521058212602843 ms\nthreads: 1"
          },
          {
            "name": "BM_MemoryUsage/5000_cv",
            "value": 0.0011205130138052628,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0004995483424216988 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}