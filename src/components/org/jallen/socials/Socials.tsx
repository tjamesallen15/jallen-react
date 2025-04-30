import { getSocials } from "@/data/api/common";
import { Social } from "@/data/common/types";

type SocialsProps = {
  containerStyles: string,
  iconStyles: string
};

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  const socialList: Social[] = getSocials();
  return (
    <div className={containerStyles}>
      {
        socialList.map((item, index) => {
          return (
            <a
              href={item.href}
              key={index}
            >
              <div className={iconStyles}>
                {item.icon}
              </div>
            </a>
          )
        })
      }
    </div>
  )
}

export default Socials;