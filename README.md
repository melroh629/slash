# 카페노노 개발자 온라인 테스트

## 요구사항

1. 엘리베이터 호출 및 이동

   - 총 세 대의 엘리베이터가 각각 존재
   - 층 버튼을 누르면 가장 적절한 엘리베이터가 해당 층으로 이동
   - 엘리베이터는 한 층씩 이동
   - 엘리베이터는 동시에 같은 층에 도착할 수 없음
   - e.g.
     - 15층 호출 -> 1호기 엘리베이터 15층으로 이동
     - 14층 호출 -> 2호기 엘리베이터 14층으로 이동
     - 13층 호출 -> 3호기 엘리베이터 13층으로 이동

2. 버튼 비활성화/재활성화

- 비활성화

  - 세 대의 엘리베이터가 모두 호출되면 모든 버튼은 비활성화 됨
  - 한 번 호출된 번호는 해당 층수에 도착하기 전까지 중복으로 누를 수 없음
  - e.g. 15층 호출해서 1호기가 출발했기 때문에 15층을 또 누를 수 없음

- 재활성화

  - 세 대의 엘리베이터 중 하나라도 도착했으면 버튼은 다시 활성화 됨
  - e.g. 1호기가 15층에 도착 했다면 1 ~ 15까지의 버튼은 다시 활성화 되고 이 상태에서 1을 누르면 1호기가 1층으로 이동함

- 적절한 엘리베이터 선책
  - 세 대의 엘리베이터 중 가장 적절한 엘리베이터를 선택하여 호출된 층으로 이동
  - e.g. 세 대의 엘리베이터가 각각 12층, 14층, 10층에 있을 경우 2를 누르면 3호기가 2층으로 이동함

## 기술 요구사항

- React, TS를 사용하여 개발
