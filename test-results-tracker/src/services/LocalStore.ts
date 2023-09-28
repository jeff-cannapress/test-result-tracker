
import { LabDataStore, Lab, TestCategory } from "./Models";
export const cannedCategories: TestCategory[] = [
    {
        "id": 0,
        "name": "Category A",
        "tests": [
            {
                "id": 1,
                "categoryId": 0,
                "name": "Test A-1",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.3462547931456015,
                    "max": 0.8182217897028126
                }
            },
            {
                "id": 2,
                "categoryId": 0,
                "name": "Test A-2",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.08822384052329113,
                    "max": 0.5877614359082792
                }
            },
            {
                "id": 3,
                "categoryId": 0,
                "name": "Test A-3",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.4991940365862231,
                    "max": 1.2241315620460411
                }
            },
            {
                "id": 4,
                "categoryId": 0,
                "name": "Test A-4",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.7752003670562171,
                    "max": 0.8026539651005506
                }
            },
            {
                "id": 5,
                "categoryId": 0,
                "name": "Test A-5",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.5093373372641621,
                    "max": 1.5048690730889749
                }
            },
            {
                "id": 6,
                "categoryId": 0,
                "name": "Test A-6",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.9021813395913876,
                    "max": 1.3202717366933012
                }
            },
            {
                "id": 7,
                "categoryId": 0,
                "name": "Test A-7",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.6360656242611029,
                    "max": 1.4996446687309921
                }
            },
            {
                "id": 8,
                "categoryId": 0,
                "name": "Test A-8",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.04158287746330758,
                    "max": 0.3281495665693328
                }
            },
            {
                "id": 9,
                "categoryId": 0,
                "name": "Test A-9",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.14632658965418655,
                    "max": 0.9695130759545485
                }
            },
            {
                "id": 10,
                "categoryId": 0,
                "name": "Test A-10",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.4120633149094697,
                    "max": 0.9109164938156022
                }
            }
        ]
    },
    {
        "id": 1,
        "name": "Category B",
        "tests": [
            {
                "id": 101,
                "categoryId": 1,
                "name": "Test B-1",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.9420332796311186,
                    "max": 1.712879681808599
                }
            },
            {
                "id": 102,
                "categoryId": 1,
                "name": "Test B-2",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.5792413503915275,
                    "max": 0.641560673308375
                }
            },
            {
                "id": 103,
                "categoryId": 1,
                "name": "Test B-3",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.9652450590638251,
                    "max": 1.4203386274568583
                }
            },
            {
                "id": 104,
                "categoryId": 1,
                "name": "Test B-4",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.4841834271364851,
                    "max": 0.6295832557136192
                }
            },
            {
                "id": 105,
                "categoryId": 1,
                "name": "Test B-5",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.5972439973543917,
                    "max": 1.3173445219655686
                }
            },
            {
                "id": 106,
                "categoryId": 1,
                "name": "Test B-6",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.2290653111857619,
                    "max": 1.0585055876352358
                }
            },
            {
                "id": 107,
                "categoryId": 1,
                "name": "Test B-7",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.5794129942772424,
                    "max": 0.6658533591702986
                }
            },
            {
                "id": 108,
                "categoryId": 1,
                "name": "Test B-8",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.36735914484577026,
                    "max": 1.2658291508736363
                }
            },
            {
                "id": 109,
                "categoryId": 1,
                "name": "Test B-9",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.7303941263569331,
                    "max": 0.8634757408200413
                }
            },
            {
                "id": 110,
                "categoryId": 1,
                "name": "Test B-10",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.8508458441283011,
                    "max": 1.260698298182849
                }
            }
        ]
    },
    {
        "id": 2,
        "name": "Category C",
        "tests": [
            {
                "id": 201,
                "categoryId": 2,
                "name": "Test C-1",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.007575475052705727,
                    "max": 0.18766116715321246
                }
            },
            {
                "id": 202,
                "categoryId": 2,
                "name": "Test C-2",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.5362627090125567,
                    "max": 0.7459221154603082
                }
            },
            {
                "id": 203,
                "categoryId": 2,
                "name": "Test C-3",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.5390041121732769,
                    "max": 1.424416491796325
                }
            },
            {
                "id": 204,
                "categoryId": 2,
                "name": "Test C-4",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.6641583150780885,
                    "max": 1.1193552005498046
                }
            },
            {
                "id": 205,
                "categoryId": 2,
                "name": "Test C-5",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.06602130010859653,
                    "max": 0.8881571909831076
                }
            },
            {
                "id": 206,
                "categoryId": 2,
                "name": "Test C-6",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.639613316009511,
                    "max": 1.050791081834977
                }
            },
            {
                "id": 207,
                "categoryId": 2,
                "name": "Test C-7",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.9917593258957564,
                    "max": 1.7483688053566095
                }
            },
            {
                "id": 208,
                "categoryId": 2,
                "name": "Test C-8",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.7949429712382936,
                    "max": 1.7333672647705933
                }
            },
            {
                "id": 209,
                "categoryId": 2,
                "name": "Test C-9",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.44288890186622054,
                    "max": 1.2388134809438978
                }
            },
            {
                "id": 210,
                "categoryId": 2,
                "name": "Test C-10",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.4447837823492522,
                    "max": 1.1806738162368953
                }
            }
        ]
    },
    {
        "id": 3,
        "name": "Category D",
        "tests": [
            {
                "id": 301,
                "categoryId": 3,
                "name": "Test D-1",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.7508224311960947,
                    "max": 0.9703853511880989
                }
            },
            {
                "id": 302,
                "categoryId": 3,
                "name": "Test D-2",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.5724194545960606,
                    "max": 1.3715613860229054
                }
            },
            {
                "id": 303,
                "categoryId": 3,
                "name": "Test D-3",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.714888562034083,
                    "max": 1.1129857337149764
                }
            },
            {
                "id": 304,
                "categoryId": 3,
                "name": "Test D-4",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.9272817669141415,
                    "max": 1.1846016686713101
                }
            },
            {
                "id": 305,
                "categoryId": 3,
                "name": "Test D-5",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.8114412292037185,
                    "max": 1.507956698163792
                }
            },
            {
                "id": 306,
                "categoryId": 3,
                "name": "Test D-6",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.5791877404295869,
                    "max": 1.1078378609687398
                }
            },
            {
                "id": 307,
                "categoryId": 3,
                "name": "Test D-7",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.37542539231766514,
                    "max": 0.9773708509217778
                }
            },
            {
                "id": 308,
                "categoryId": 3,
                "name": "Test D-8",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.0946760039044745,
                    "max": 0.22253829467182396
                }
            },
            {
                "id": 309,
                "categoryId": 3,
                "name": "Test D-9",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.6172780573884431,
                    "max": 1.1918772254895533
                }
            },
            {
                "id": 310,
                "categoryId": 3,
                "name": "Test D-10",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.8793482687359555,
                    "max": 1.722593494626809
                }
            }
        ]
    },
    {
        "id": 4,
        "name": "Category E",
        "tests": [
            {
                "id": 401,
                "categoryId": 4,
                "name": "Test E-1",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.26093774477856724,
                    "max": 0.43296494202945324
                }
            },
            {
                "id": 402,
                "categoryId": 4,
                "name": "Test E-2",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.2789155438697195,
                    "max": 0.7806643344200803
                }
            },
            {
                "id": 403,
                "categoryId": 4,
                "name": "Test E-3",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.4007555998433745,
                    "max": 0.8401861452104542
                }
            },
            {
                "id": 404,
                "categoryId": 4,
                "name": "Test E-4",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.794676049391503,
                    "max": 1.4755277572621546
                }
            },
            {
                "id": 405,
                "categoryId": 4,
                "name": "Test E-5",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.5726842841703697,
                    "max": 1.2917656286071892
                }
            },
            {
                "id": 406,
                "categoryId": 4,
                "name": "Test E-6",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.2998142718832728,
                    "max": 0.6339656150340305
                }
            },
            {
                "id": 407,
                "categoryId": 4,
                "name": "Test E-7",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.5048177952155586,
                    "max": 0.6710155711856058
                }
            },
            {
                "id": 408,
                "categoryId": 4,
                "name": "Test E-8",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.8816578732882159,
                    "max": 1.0224925546039472
                }
            },
            {
                "id": 409,
                "categoryId": 4,
                "name": "Test E-9",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.4336039622887766,
                    "max": 0.7508780681218064
                }
            },
            {
                "id": 410,
                "categoryId": 4,
                "name": "Test E-10",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.8203641084168516,
                    "max": 1.1727102721412281
                }
            }
        ]
    },
    {
        "id": 5,
        "name": "Category F",
        "tests": [
            {
                "id": 501,
                "categoryId": 5,
                "name": "Test F-1",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.7221662033982454,
                    "max": 0.7679779651920551
                }
            },
            {
                "id": 502,
                "categoryId": 5,
                "name": "Test F-2",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.4251350013952313,
                    "max": 0.9795186269113982
                }
            },
            {
                "id": 503,
                "categoryId": 5,
                "name": "Test F-3",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.7386461925601282,
                    "max": 1.5116591832155934
                }
            },
            {
                "id": 504,
                "categoryId": 5,
                "name": "Test F-4",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.17166666081473436,
                    "max": 0.4768721997853955
                }
            },
            {
                "id": 505,
                "categoryId": 5,
                "name": "Test F-5",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.009505439428578288,
                    "max": 0.8547742347766012
                }
            },
            {
                "id": 506,
                "categoryId": 5,
                "name": "Test F-6",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.48772569319136205,
                    "max": 1.0606221989284412
                }
            },
            {
                "id": 507,
                "categoryId": 5,
                "name": "Test F-7",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.06954252708091069,
                    "max": 0.46857975656723494
                }
            },
            {
                "id": 508,
                "categoryId": 5,
                "name": "Test F-8",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.4386336838955729,
                    "max": 0.7814313514633129
                }
            },
            {
                "id": 509,
                "categoryId": 5,
                "name": "Test F-9",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.7384302143510297,
                    "max": 0.7559464616749347
                }
            },
            {
                "id": 510,
                "categoryId": 5,
                "name": "Test F-10",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.13081927227757273,
                    "max": 0.8174237051305078
                }
            }
        ]
    },
    {
        "id": 6,
        "name": "Category G",
        "tests": [
            {
                "id": 601,
                "categoryId": 6,
                "name": "Test G-1",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.3925911564150879,
                    "max": 0.42095042615200073
                }
            },
            {
                "id": 602,
                "categoryId": 6,
                "name": "Test G-2",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.317410015740611,
                    "max": 1.1567082048331985
                }
            },
            {
                "id": 603,
                "categoryId": 6,
                "name": "Test G-3",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.40782045572154324,
                    "max": 1.134317990036982
                }
            },
            {
                "id": 604,
                "categoryId": 6,
                "name": "Test G-4",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.9411800063318299,
                    "max": 1.0758814275569475
                }
            },
            {
                "id": 605,
                "categoryId": 6,
                "name": "Test G-5",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.02789960321185303,
                    "max": 0.32118991202430514
                }
            },
            {
                "id": 606,
                "categoryId": 6,
                "name": "Test G-6",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.8350430251816212,
                    "max": 1.0463488412721642
                }
            },
            {
                "id": 607,
                "categoryId": 6,
                "name": "Test G-7",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.9233808590788868,
                    "max": 1.7361577871058382
                }
            },
            {
                "id": 608,
                "categoryId": 6,
                "name": "Test G-8",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.25851195974495744,
                    "max": 0.9869968474952533
                }
            },
            {
                "id": 609,
                "categoryId": 6,
                "name": "Test G-9",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.6217170243481744,
                    "max": 0.7989155573348112
                }
            },
            {
                "id": 610,
                "categoryId": 6,
                "name": "Test G-10",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.6547564370166423,
                    "max": 1.0219372423156627
                }
            }
        ]
    },
    {
        "id": 7,
        "name": "Category H",
        "tests": [
            {
                "id": 701,
                "categoryId": 7,
                "name": "Test H-1",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.6009864079457143,
                    "max": 1.010862715782923
                }
            },
            {
                "id": 702,
                "categoryId": 7,
                "name": "Test H-2",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.8672592859717643,
                    "max": 1.7800275750737187
                }
            },
            {
                "id": 703,
                "categoryId": 7,
                "name": "Test H-3",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.18127943285768722,
                    "max": 0.39424980201503756
                }
            },
            {
                "id": 704,
                "categoryId": 7,
                "name": "Test H-4",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.7975097693360453,
                    "max": 1.2669004608362127
                }
            },
            {
                "id": 705,
                "categoryId": 7,
                "name": "Test H-5",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.48317656651723806,
                    "max": 0.8787586943028789
                }
            },
            {
                "id": 706,
                "categoryId": 7,
                "name": "Test H-6",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.585543578060503,
                    "max": 1.0359598468066749
                }
            },
            {
                "id": 707,
                "categoryId": 7,
                "name": "Test H-7",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.10181093063215929,
                    "max": 0.9627236956497416
                }
            },
            {
                "id": 708,
                "categoryId": 7,
                "name": "Test H-8",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.48767396559708875,
                    "max": 1.0930651374858305
                }
            },
            {
                "id": 709,
                "categoryId": 7,
                "name": "Test H-9",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.9897291788298475,
                    "max": 0.9974431404153092
                }
            },
            {
                "id": 710,
                "categoryId": 7,
                "name": "Test H-10",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.5143882627778731,
                    "max": 1.0797070944561782
                }
            }
        ]
    },
    {
        "id": 8,
        "name": "Category I",
        "tests": [
            {
                "id": 801,
                "categoryId": 8,
                "name": "Test I-1",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.3391596403770192,
                    "max": 0.4446376725988739
                }
            },
            {
                "id": 802,
                "categoryId": 8,
                "name": "Test I-2",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.21264177362200454,
                    "max": 0.8466253331274207
                }
            },
            {
                "id": 803,
                "categoryId": 8,
                "name": "Test I-3",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.42358803391657407,
                    "max": 0.5107642192174102
                }
            },
            {
                "id": 804,
                "categoryId": 8,
                "name": "Test I-4",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.619096027854998,
                    "max": 1.4130335037758028
                }
            },
            {
                "id": 805,
                "categoryId": 8,
                "name": "Test I-5",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.9565674819239021,
                    "max": 1.2540847163632913
                }
            },
            {
                "id": 806,
                "categoryId": 8,
                "name": "Test I-6",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.25559758844069425,
                    "max": 0.3598206125018468
                }
            },
            {
                "id": 807,
                "categoryId": 8,
                "name": "Test I-7",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.11273947689341446,
                    "max": 0.38847405091203613
                }
            },
            {
                "id": 808,
                "categoryId": 8,
                "name": "Test I-8",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.866694751933069,
                    "max": 1.8258053019356093
                }
            },
            {
                "id": 809,
                "categoryId": 8,
                "name": "Test I-9",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.47956887752459476,
                    "max": 1.2571148401241934
                }
            },
            {
                "id": 810,
                "categoryId": 8,
                "name": "Test I-10",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.8173245698930474,
                    "max": 1.1260066955162957
                }
            }
        ]
    },
    {
        "id": 9,
        "name": "Category J",
        "tests": [
            {
                "id": 901,
                "categoryId": 9,
                "name": "Test J-1",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.8860561237328966,
                    "max": 1.4914855603594541
                }
            },
            {
                "id": 902,
                "categoryId": 9,
                "name": "Test J-2",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.8906076680125321,
                    "max": 1.1011882373689397
                }
            },
            {
                "id": 903,
                "categoryId": 9,
                "name": "Test J-3",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.7044964715529369,
                    "max": 0.9076787766221801
                }
            },
            {
                "id": 904,
                "categoryId": 9,
                "name": "Test J-4",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.9447994760776113,
                    "max": 1.9290315730893464
                }
            },
            {
                "id": 905,
                "categoryId": 9,
                "name": "Test J-5",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.7064227754905856,
                    "max": 1.1276501286409777
                }
            },
            {
                "id": 906,
                "categoryId": 9,
                "name": "Test J-6",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.4419580316932179,
                    "max": 0.5186935325604218
                }
            },
            {
                "id": 907,
                "categoryId": 9,
                "name": "Test J-7",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.8826099054173329,
                    "max": 1.083593758099472
                }
            },
            {
                "id": 908,
                "categoryId": 9,
                "name": "Test J-8",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.7011942123063692,
                    "max": 1.3150957221410535
                }
            },
            {
                "id": 909,
                "categoryId": 9,
                "name": "Test J-9",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.8511319119897989,
                    "max": 1.363249748529401
                }
            },
            {
                "id": 910,
                "categoryId": 9,
                "name": "Test J-10",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.15909402922932148,
                    "max": 0.24268522161920902
                }
            }
        ]
    },
    {
        "id": 10,
        "name": "Category K",
        "tests": [
            {
                "id": 1001,
                "categoryId": 10,
                "name": "Test K-1",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.4671111452787491,
                    "max": 0.523348774236895
                }
            },
            {
                "id": 1002,
                "categoryId": 10,
                "name": "Test K-2",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.2576097510819064,
                    "max": 0.76611352234215
                }
            },
            {
                "id": 1003,
                "categoryId": 10,
                "name": "Test K-3",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.5987046186840996,
                    "max": 1.282934076552098
                }
            },
            {
                "id": 1004,
                "categoryId": 10,
                "name": "Test K-4",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.49148849199848366,
                    "max": 1.4700648133716718
                }
            },
            {
                "id": 1005,
                "categoryId": 10,
                "name": "Test K-5",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.980218826673249,
                    "max": 1.4075089594345949
                }
            },
            {
                "id": 1006,
                "categoryId": 10,
                "name": "Test K-6",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.2264102317771135,
                    "max": 1.0487488752900689
                }
            },
            {
                "id": 1007,
                "categoryId": 10,
                "name": "Test K-7",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.027608981537639465,
                    "max": 0.38007491644167857
                }
            },
            {
                "id": 1008,
                "categoryId": 10,
                "name": "Test K-8",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.1612073725238521,
                    "max": 1.0910825812647724
                }
            },
            {
                "id": 1009,
                "categoryId": 10,
                "name": "Test K-9",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.3905628494451392,
                    "max": 0.634909313255299
                }
            },
            {
                "id": 1010,
                "categoryId": 10,
                "name": "Test K-10",
                "units": "ng/dL",
                "referenceRange": {
                    "min": 0.820843524918839,
                    "max": 1.2575606194876243
                }
            }
        ]
    }
];
export default class LocalStore implements LabDataStore {
    private static readonly StoreKey = "test-results-tracker/labs";
    private tests: TestCategory[] = cannedCategories;
    private store: Storage
    constructor(store: Storage | null = null) {
        this.store = store || window.localStorage;
    }
    getTests(): Promise<TestCategory[]> {
        return Promise.resolve(this.tests);
    }
    async getLabs(): Promise<Lab[]> {
        const json = this.store.getItem(LocalStore.StoreKey);
        if (json === null || json === "" || json === undefined) {
            return [];
        }
        else {
            return JSON.parse(json);
        }
    }
    async saveLab(lab: Lab): Promise<Lab[]> {
        let labs = await this.getLabs();
        labs = labs.filter(l => l.date.getTime() !== lab.date.getTime()).concat([lab]);
        this.store.setItem(LocalStore.StoreKey, JSON.stringify(labs));
        return labs;
    }
    async removeLab(lab: Lab): Promise<Lab[]> {
        let labs = await this.getLabs();
        labs = labs.filter(l => l.date.getTime() !== lab.date.getTime());
        this.store.setItem(LocalStore.StoreKey, JSON.stringify(labs));
        return labs;
    }
}