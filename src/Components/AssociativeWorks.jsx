import React from "react";

const AssociativeWorks = () => {
  const works = [
    {
      title: "Head of business and events Department at Microsoft ISSATSO",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt023-c8ClZjqC4YgeSuBSE0uN5HUfI22PoQ&s",
    },
    {
      title: "Lead of Organisation committee at CyberTrace ISSATSO",

      image: "https://cybertrace.tn/logo.png",
    },
    {
      title: "Secretary General at Google club ISIGK",

      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSERIVExIWEBASEhUTFRYVDxUSFRcXFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy8lICYwLy8yLS0tLS8rLSstLS0tLS0tLS81LzUtLS0tLS0vLS0tLS0tLS0tLS0tLS0vLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgMBBAUGBwj/xABDEAACAQIDAwkDCAgGAwAAAAAAAQIDEQQhMQUSUQYTIkFhcYGRoQcysUJDUnKCksHhFBUzYqLR0vAWY3PCw9N0k7L/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUG/8QAMxEBAAIBAgQDBQgCAwEAAAAAAAECAwQREiExUQVBoRMUYZHhFSIycYHB0fBSsUJDciP/2gAMAwEAAhEDEQA/APuIACuq2BXcCyE8swMxncBziAja+jAjmuIFkFxAmBU4MCFwFwFwFwFwJ0gLQAACuqusBBMCwAAAAYlKwFfO9gEd98QEZsC2MrgUyYGALYrogVpZ2AlLLQDCmwLKcrgTAAUVNQIgAAAC2joBYAAAAAAAAAAUyV2BbuoDXAAAAGYxuBZfdQEIagZqrMCAEoSsBemAAoqagRAAACQGxFWAyAAAAAAAAAAUxefmBcBrAAAAAAbAASbbAsqLKwFIF9PQCQFE1mBEAAAlBZgXgAAAABhysBW6oE4zTAkAAjJLrAzvLiBrgAAAAAAWAupWAxKpwAqAspJgWNga4AABaqXECaVgMgAAAABrtgYAASjJoCUqmfgBBsDAAAAAAALYU+IE2gMNpARumBDcYF4ADWAlCN2BckBkCuq2BGne4FwAABXVl1AVAZaAwBLeytYCIAAAAAAAGvjsfToR36st2O8ksm25PRJLNvJkuLDfLbhpDS+StI3s2cDjI1Yb8FJK7XSi4yy7JZmMmOcduGfTmzS8WjeGwRtlVZ9QEEBpYrb9CFRUd7eqO91GzUbK9pPRPLTUp6jW48PXn+SXHhtdZ+uIfRl6fzKn2zh/xt6fym9zv3hXidvU4QlNwqNRi5NJRvZZu15G1PF8NrRXaef5fyzXRXtMRvHr/DhS5e4Z/N1/u0/+wue9U7StfY+b/Kvr/Cyny+wq+RW+7D+se9U+LH2Pn7x85/hNcvsL9Gt92P8AUZ95p8WPsjP3j5/RlcvcJwq/cX9Q95ofZOf4fNL/AB5hP8z7n5j3mjH2TqPh83p0+BYcxkABGo7ICgCVPUBNZgRAAAAAAAAAAOJyj9/Cf+bS+DLuj/Dl/wDMq2o60/8AUO7CdiksrlIDXxNZJOT0jFydld2Su7JamJnaN5Ijd4DbXKupVvCjelT4/OyXa17q7F5nHz621+VOUev0W6YYjnLg4eruSjJfJkn5PQoTG8bJ4nm9zGSautGrruOasstXyejyfcB85xdB05yg/kyce9J5PyPQUvx1i3d3KW4qxZUbtgAAA+ucjMdz2Eptu8oLmpcbwyV+1x3X4nSwW4qQ8n4hi9nqLR5Tz+f1dtslUkYTuAmroCqUbdYGaazAzWYFYAAAAAAAAABwNrwccXh6k3zlOU1ShBtrm6r0qJLKXjodDTzFtPeleUxG8z3jt8FXLExlraecdPynu75z1pJSyaAiB8tr7NaxE6EWk1OcY7zdrK7Wi1seazx7K0xPk6NPvRDY/wAPVfpU/OX9JW94r8Uns5egwFKUKcYzacoq2V7WWmq4WKt5ibTMJaxtCzEVdyMpWb3YylZauyvZX6zFY3nZmXzLbnKahVqudOM7OMb3Uc5LK6z0skd/Tae9MfDZdwamKU4bQ5/69h9GXp/Mn9lKb3yvaWP17D6EvQeylj3yvY/XsfoS80Z9lJ75XszS2zvSUYUpznJ2jGPSnJ8IxSu32Ieylj3yseT6/wCzzZmJoUpvEQVJTcZQpuSlUi0mm5WyV1u5Xemdi3gx2pE7uJ4jqsee0TWOj1NSfUTuchF2YF1wKJvMCSnbRARk7gYAAAAAAAAAAOHynmovCyk0orGU3JvKKVnm31F7RRMxkiOvDKtqZ2mkz3h2qdSMleLUlxTTXmilNZidphYiYnoxWqqEZSl7sYuTsm3ZK7yWbNbWisTMtojfk8LtrlbUqXhQvThpvfOyXevd8M+05GfXWvypyj1+i1TDEc5efw1bcnGfCSl355nPtG8TCeJ2e6TvmtDmrIAA+eT9lmNnKUqMsPzTnPm96pNS3LvdTSpuztbrPWaffLirfvHr5+qK2px1nad9/wAvqzH2SbQ66mF/9lX/AKSb2VmvvmL4/KP5Ww9kWM662HXc6j/2Iz7KWvvtO0tnD+x+u5LnMTSUb9LcjKUrdl7K49lPdidbXyh9F5N8lcLgY2oU+m1aVWfSrS75dS7FZdhLWsV6KeTNfJ1ds2RIuK1ArqRAi2BgAAAAAAAAAAAAAEK1GM4uM4qUXqpJOL70zatrVnes7SxNYtG0o4fDwpx3acIwjm7RSjG71yQve153tO8/FitYrG0RssaTyea0fcatnyups2SrzoR96MppXdrqOj8szzOaPZWmJ8pdGn3ohsLYFb93735EHvFEns5ejwFOUacYztvRjuu2assl6WKl5ibTMJaxtC6crJuzdk3Zau3UjWOrLgYflVGpJQp0Ks5vSMUnJ+CZcjRXmdolDOaIe92LCoqS52O5JttR3lJxT6m1le99L956HQYL4MXBfuoZ7xe28N8uoQAAAAAK6sesCoAAAAAJumwMSjYCIGbAYAAAAACvEVowjKc3aMYuUnZuyWuSNbWisTaekMxG87Q8RtrlfOd4Ye9OGm+/2r7vo/HuOVn11rcsfKO/n9FqmCI52efwWI3KkZt6TTk+uz970bOdeOKJhPE7S9wc1ZAAHX5P7NoUad6NOMHLObWcm753k87XvZaI9doJrbBW0duf5x1crPvF5iXVLiEAAAAACqqwINgThDiBJwWgELdTAjJWAICx1ewBzi60BUAAAAAAABCtSU4uMvdlFxfc1Z/ExMRMbSRO3N8jr0XCUoS1jKUX3xdn8DzdqzWZrPk6MTvG6swy9rsivv0YPr3d198cvwv4nOy14bzCes7w2zRsAdjYdXKUeDTXjr8PU7/g2Xetsfbn8/76qGsrzizqHbU1WJxEKcXOpOMIRV5Sk1GKXa2ZiJmdoYmYiN5eNxPtHoc44UKcqqSbc2+bg/qpxbfikdDB4da/4p29VXJq4r+GN1VT2gT6qEV31G/9qLP2VWOt/T6offp/x9VFTl/W6qdJcL7z/FG0eGYY62lrOtv5RCl8u8S+qiu6E/xmbx4bp+8/39GvvuX4f39VmzOWFedamqjjzbmoytG2Usk79jafga5fD8Xs7TTfeP2bY9XebxFuj30YnCdNY6iAKogJNARqQuBicMkBBwfACLAAAAAAAAzYCVONwPnHLfCc3ipNaVIxqLhf3Zesb+JxNbThyzPfmuYZ3q4BUTPRcla+U4cGprxyfwXmVNTXpKTHPk7xWSgG3syru1FwfRfjp62L3h2X2eor8eXz+uyHUV4sctrlXtSeFwtSvTgqkobuUm0kpSUd52zaV72y01PY4ccXvFZlx8lprXeHxPbO28Ri5b1eo52d4x0px+rBZLv14tnZx4q442rDnXva882phKm7OL7c+55MmpO1olHaN4d2qtHw1/mW7x0lBDF007efeY3rMTsIt3S7Ne5/2jTrUTpvqtb++JJTeOUwxL63sbGc9Qp1OuUFvfXWUvVM8tqMXsstqdp9PJ3MV+OkWbpCkEBbGrxAzKp4gFVQGecQFMndgYAAZkrAYAspRAssBkCumrNgeV9omEvSp1VrCbi/qzWvnFeZz/EKb0i3b90+CeezwJyVtv7Er7laLejvB+OnrYiy14qSzWdperqYynH3qkF3yivxKkYck9Kz8pbW1OGn4rxH6woltfDr56n4ST+BJGkzz/wn5IJ8S0kf9lfnCmXKHDR+dz6rRm/giSug1O+8V9YQ38Y0Ucpv8omf9Q9hNU8Xhmr3p16DV/3Zxt4NXPXYrzG1vPqqb1yV3rzif9Pz7VpShKUJK0oylCS4Si7NeaZ6GJiY3hzNtuUqalVLXy6zE2iGYiZbdPbs2klTTskm3L10JY1NukQ0nDHdvYDHynLdkorJ2tfXx7Lk2PLNp2lHekRHJ0SdGAe39n+MvCpRfyZKcfqyya8Gv4jh+K49rVv35fL++jpaG/KavWnJXgAAAAAMtAYAAXVVkBSBdS0AlKVgCYBsDR23hefw9Wms3KD3frrpR9UiLPTjxzVtS21ol8Uxm1YQyXSlwWi731HGw6W+Tn0htqNfjw8o5z2j95/suHi8fUqauy6orKP5+J0sWCmPp17uJqNXkz8rTy7eX1dejJOKa60mSS4014Z2TMMAH0/2bY7fwzpvWlUaXHcn0k/NyXgTUnk7/hmTixcPafTq1NsezeliK9Ss69Smqk99xhGOTaW90nfV3enWXq6y1axXbot209ZtMuFyk9meHw+Fq1qVStUqU4qdqkobm6mt92jBPKN3r1EmHUzfJFbR1aZMMVrMw8ClbQ6SmnQqbslLg0/DrNqztO7ExvGz0RfVmQOvyTxnNYqm3pO9KX2/d/iUSnr8ftME/Dn8vpun01+HJHx5Ppp5l2QAAAAAJ0+AEGgAGy0BVKlwAik0Bhu4F0ZICQGGgPzxyw2d+j42vStaKquUOG5U6cUu5St4EU9XEz04ckw45hE6+yql4W4P0ef8zWVTPG1t26YQgHpeQW1oYfES52ShTqU2m3lFSi7xbfdvLxN6TtK/4fnriyTxTtEx/rp+73FXllgY/P3+rCpL1UbEnHDrW1+nj/l6TLewGOo4yjJwe9Tlv0pJpp6Wkmn2P1Nq284TYs1M1eKvR8Ex2FlRqTpS96nUnTfa4tq/ja/iegrbiiLR5qExtOyg2Yd3Z9Tepriui/D8rFzFO9YV7xtLZJGom1mnZrNPg+pmOvUfW9nYpVaUKi+XCMn2O2a8HdHks2P2eSadpd3HfjrFu7ZI24AAAACYFk81fzArA2QAACLpoCtKzAuAhKoB8m9smAtWo4hLKdOVKXDeg96Pi1OX3TSzm66nOLfo+a1MRFda8zRTiu7FOrUfuycU7aNpemplma084XJP5UnLvbaDXePKHa2ZUvC3BtfiviaSpZo2s2zCIA9z7L8dadWg370VVj3x6M/Rw8iTHPk63hWTa1qfr+0/s8/7Utn81jecS6NanGfZvx6El5KD+0dzRX4se3Zc1Fdr793jy2gdHY9TOUfFeGT/AA8ifBPWEWSPN1SyiAPecgcZvUZUnrTndfUnn/8ASl5nB8Ux7ZIv3j1j6bOnor70mvb93qDlroAAAAAADOQGwAAAAMONwITjkBUBrY7AUayUa1KnVipbyjUhGcVKzV7STV7N+ZjbdiaxbrDOHwNKn+zpU4fUhGPwRkiIh8s9r2A3MTTrpZVaW7L69J2bf2ZQX2TSzm62m14t3eENFJvbJqWk48V6r+2YlBnjlu6rdtTVVYjJPRp92YZmJjq6XJ7aH6PiaVV33YytO30JJxll12TvbsNqztKbTZfZZa3np+zr8v8AbeHxtOnGkp85TqNqUopR3JK0o63u2oPT5Jc0+qrimd3S1HiGK8RwxPyePo7OvrL0/M6+jzV1O+3LZBTURfpDbw+AjBqSk213WOjXFFZ3bTeZjZuErQA7nIzF83iop6VE6b73nH1SXiUfEcXHgme3P+VnSX4cn58n0g8267WxU5x6Sa3bro28NTn6zJmwR7WLRw8vu7fp1WMNaX+7Mc+7ZOgrgAAAAAbIAAAAAVVZdQFYAAB4/wBqez+dwLmveo1IVfsvoT8LSv8AZNbdFXWU4se/Z8co4erU/ZUqlX/TpymvOKZo5tcVrdIYxuzsTSceepVKG8m4c5GVNtLJ2Tz615htanB+KFMaK1fSfaEc3nydTZFTNx7Lrwyf4eRrKrnjlEumaqwBZQlZ+h0PDMvs9RHx5fx6pcU7WbZ6tcAAEqVRxkpRylGSlF8JJ3T80YmItG0kTtO8PsOHxMatKFSOk4xmu5q55HJSaXms+TvUtFqxaPNRj4NwaSu8n5M5/iOO19PaKxvPL0lY09orkiZXU6ikrrNMs4s1MtIvSd4lHak1naUiRqAAAE+bYFwAAAAAa8tQMAAABoDNwPDe1vZ+/hIVks6NVXf7lS0H/Fzfka2U9bTenF2fIiNyluFqbs4vtz7nkw1vG9Zh3JzS1aXe7GilETPRrz2hSWtSPg7/AAM7SkjDefJS9sU1pvPuX87E2LDktMTX5pa6TJLNXlHFaU39qSX4M9R732hejB3lihtTE1f2FBz/ANOnOo/4SO2stHaG8YI+Mu/sbkltXFO8l+jU+uVWKjL7NO2+337q7Srk8QmPPf8AL+U1dLv5Pf7D5AYahaVWU8VU41nekn+7S923fvPtKOTWZb+azTT0r5PVOCtZZJaW0RVTtHaOVN+C9UUPE5mNNbb4f7hPpo/+kL4xSyWSWhdrStI4axtEIZmZneWTZgAAW0o9YFgAAAAAAK6sesCoAAAAANPbOBWIoVaL+cpTgnwk10X4Oz8DEtL14qzXu+EYfk7januYSu3205Qj96dl6ke0uPXT5LeTp4X2cbUq60oUV/mVY/8AHvMzwysV0l3Wwnscrv8Aa4qlB9e5CVT1k4GeGU0aSfOXbwfsfwsbc5iK83+7zcIvwcW/UlpMV8t/zSV0tY6y7mE9nGzYZ/o7m+NSpUkvu7276Es6jJPmkjDSPJ2sHyfwlLOlhaEHxjSgpedrkc5LT1lvFax0h0kjRsAAAHPx8Jye6opRe70r/gc/WY82eJxRWOHl97f9eixitSn3pnn2XnQVwAAAupPICYAAAAAAAGvKNgMAAAAAAA2UAAAAAAAAAAa8nmBgAAAAW0UBPeQGQAAAAAAGBryVmBgAAAAZirsDYAAAAAAAAAAKJqzAiAAAWUogWNga4GyAAAAAAABRU1AiAAATpwuBakBkAAAAAAAAAArrAVAACAvhGwGZK4FXNMC4AAAAAAACieoEQAAC+EbICQAAAAAAAAAAAxJXA1wAFlKHWBaAAAAAAAAAAAKJ6gRAAW04dYFgAAAAAAAAAAAAAIOmAVNATAAAAAAAAAAAADXYGAJxp3AuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAwBNAZAAAAAAAAAAAAAAAAAAAAAA//9k=",
    },
    {
      title: "Sponsoring Manager at Google club ISIGK",
   
      image: "data:image/jpeg;base64,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",
    },
  ];

  return (
    <section className="associative-works p-8 bg-gray-900 dark:bg-gray-800" id="associativeworks">
    <h2 className="text-3xl font-bold text-center text-white mb-8">
      Associative Works
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {works.map((work, index) => (
        <div
          key={index}
          className="work-card bg-gray-800 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex flex-col items-center p-6">
            <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <img
                src={work.image}
                alt={work.title}
                className="w-20 h-20 object-contain rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 text-center">
              {work.title}
            </h3>
            <p className="text-gray-400 text-sm text-center">
              {work.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default AssociativeWorks;