import { Check, X } from "lucide-react";
import Image from "next/image";

function Table() {
  return (
    <div>
      <p className="font-fira text-5xl font-bold pb-5 pl-10">
        Why <span className="text-yellow-400">MoonEX</span>?
      </p>
      <div className="bg-white bg-opacity-[3%] rounded-xl overflow-hidden py-5 px-8">
        <table className="table-auto w-full">
          <colgroup>
            <col style={{ width: "40%" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "30%" }} />
          </colgroup>
          <thead>
            <tr>
              <th className="text-yellow-400 text-2xl font-semibold font-fira pb-8 border-b border-gray-800">
                Comparison
              </th>
              <th className="pb-8 border-l border-b border-gray-800">
                <Image
                  src={"/images/logo_1.png"}
                  width={125}
                  height={20}
                  alt="Moonex Logo"
                  className="mx-auto"
                />
              </th>
              <th className="pb-8 border-l border-b border-gray-800">
                <Image
                  src={"/images/uniswap_logo.png"}
                  width={125}
                  height={20}
                  alt="Uniswap Logo"
                  className="mx-auto"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-800 px-4 py-2 text-gray-400 text-lg">
                1. Point no one
              </td>
              <td className="border border-gray-800 px-auto py-4 text-green-500">
                <Check strokeWidth={5} size={28} className="mx-auto" />
              </td>
              <td className="border-b border-gray-800 py-4 text-red-500">
                <X strokeWidth={5} size={28} className="mx-auto" />
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-800 px-4 py-2 text-gray-400 text-lg">
                1. Point no one
              </td>
              <td className="border border-gray-800 px-auto py-4 text-green-500">
                <Check strokeWidth={5} size={28} className="mx-auto" />
              </td>
              <td className="border-b border-gray-800 py-4 text-red-500">
                <X strokeWidth={5} size={28} className="mx-auto" />
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-800 px-4 py-2 text-gray-400 text-lg">
                1. Point no one
              </td>
              <td className="border border-gray-800 px-auto py-4 text-green-500">
                <Check strokeWidth={5} size={28} className="mx-auto" />
              </td>
              <td className="border-b border-gray-800 py-4 text-red-500">
                <X strokeWidth={5} size={28} className="mx-auto" />
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-800 px-4 py-2 text-gray-400 text-lg">
                1. Point no one
              </td>
              <td className="border border-gray-800 px-auto py-4 text-green-500">
                <Check strokeWidth={5} size={28} className="mx-auto" />
              </td>
              <td className="border-b border-gray-800 py-4 text-red-500">
                <X strokeWidth={5} size={28} className="mx-auto" />
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-800 px-4 py-2 text-gray-400 text-lg">
                1. Point no one
              </td>
              <td className="border border-gray-800 px-auto py-4 text-green-500">
                <Check strokeWidth={5} size={28} className="mx-auto" />
              </td>
              <td className="border-b border-gray-800 py-4 text-red-500">
                <X strokeWidth={5} size={28} className="mx-auto" />
              </td>
            </tr>
            <tr>
              <td className="border-gray-800 py-3"></td>
              <td className="border-gray-800 border-l border-r py-1"></td>
              <td className="border-gray-800 py-1"></td>
              {/* <td className="border border-gray-800 px-auto py-4 text-green-500">
                <Check strokeWidth={5} size={28} className="mx-auto" />
              </td>
              <td className="border-b border-gray-800 py-4 text-red-500">
                <X strokeWidth={5} size={28} className="mx-auto" /> */}
              {/* </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
